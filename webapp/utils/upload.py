# Copyright 2015 Google Inc. All rights reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# [START all]
import webapp2

from google.appengine.api import users
from google.appengine.ext import blobstore
from google.appengine.ext import ndb
from google.appengine.ext.webapp import blobstore_handlers
from google.appengine.ext.webapp.util import run_wsgi_app
from google.appengine.api import images

class Image(ndb.Model):
    user = ndb.StringProperty()    
    blob_key = ndb.BlobKeyProperty()
    date_created = ndb.DateTimeProperty(auto_now_add=True)
    date_modified = ndb.DateTimeProperty(auto_now=True)
    user_created = ndb.UserProperty(auto_current_user_add=True)
    user_modified = ndb.UserProperty(auto_current_user=True)
    is_publish = ndb.BooleanProperty(default=False)
    is_deleted = ndb.BooleanProperty(default=False)
    
    @classmethod
    def get_images(cls):
        return cls.query().order(cls.date_created).fetch()
    

# A custom datastore model for associating users with uploaded files.

class PhotoUploadFormHandler(webapp2.RequestHandler):
    def get(self):
        # [START upload_url]
        upload_url = blobstore.create_upload_url('/upload/upload_photo')
        # [END upload_url]
        # [START upload_form]
        # The method must be "POST" and enctype must be set to "multipart/form-data".
        self.response.out.write('<html><body>')
        self.response.out.write('<form action="%s" method="POST" enctype="multipart/form-data">' % upload_url)
        self.response.out.write('''Upload File: <input type="file" name="file"><br> <input type="submit"
            name="submit" value="Submit"> </form></body></html>''')
        # [END upload_form]

# [START upload_handler]
class PhotoUploadHandler(blobstore_handlers.BlobstoreUploadHandler):
    def post(self):
        try:
            upload = self.get_uploads()[0]
            user = users.get_current_user()
            user_id = 'Anonimo'
            if not user is None:
                user_id = users.get_current_user().user_id()
               
            user_photo = Image(
                                   user=user_id,                                   
                                   blob_key=upload.key())
            user_photo.put()            
            url = images.get_serving_url(upload.key())
            self.redirect('/images')
            #self.redirect('/images/view_photo/%s' % upload.key())

        except:
            self.redirect('/upload/upload_failure.html')
# [END upload_handler]

# [START download_handler]
class ViewPhotoHandler(blobstore_handlers.BlobstoreDownloadHandler):
    def get(self, photo_key):
        if not blobstore.get(photo_key):
            self.error(404)
        else:
            self.send_blob(photo_key)
# [END download_handler]


class ReadBlobInfo(webapp2.RequestHandler):
    def get(self):        
        files = blobstore.BlobInfo.all()
        for file in files:
            self.response.out.write(str(file.key())+'  '+file.filename + '   '+ file.content_type +' '+ str(file.creation) +'<br>');
        


app = webapp2.WSGIApplication([('/upload/upload_photo', PhotoUploadHandler),
                               ('/upload/view_photo/([^/]+)?', ViewPhotoHandler),
                               ('/upload/all', ReadBlobInfo),                               
                               ('/upload.*', PhotoUploadFormHandler),
                              ], debug=True)
# [END all]