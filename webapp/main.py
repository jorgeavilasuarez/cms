#!/usr/bin/env python
#
# Copyright 2015 Google Inc.
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
#
import webapp2
import os
from google.appengine.ext.webapp import template
import webapp2
import logging
import pprint
import time
from webapp2_extras import jinja2
from webapp2_extras import sessions

class BaseHandler(webapp2.RequestHandler):

    @webapp2.cached_property
    def jinja2(self):        
        # Returns a Jinja2 renderer cached in the app registry.
        return jinja2.get_jinja2(app=self.app)

    def render_response(self, _template, **context):        
        # Renders a template and writes the result to the response.
        rv = self.jinja2.render_template(_template, **context)
        self.response.write(rv)
        
    def dispatch(self):
        # Get a session store for this request.
        self.session_store = sessions.get_store(request=self.request)

        try:
            # Dispatch the request.
            webapp2.RequestHandler.dispatch(self)
        finally:
            # Save all sessions.
            self.session_store.save_sessions(self.response)
       
 

class MainHandler(BaseHandler):    
     
    def get(self):        
                
        context = {'app': "0",
                   'session': "0"   
                  }
        self.render_response('index.html', **context)    


config = {}
config['webapp2_extras.sessions'] = {
    'secret_key': 'my-super-secret-key',
}
debug = os.environ.get('SERVER_SOFTWARE', '').startswith('Dev')
app = webapp2.WSGIApplication([
    ('/', MainHandler),
   # ('/product', 'modules.stock.handlers.product.ProductHandler')       
], debug=debug,config=config)
