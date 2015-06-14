#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
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
from google.appengine.ext import ndb


class User(ndb.Model):
    name = ndb.StringProperty()
    date_created = ndb.DateTimeProperty(auto_now_add=True)
    date_modified = ndb.DateTimeProperty(auto_now_add=False)

class Product(ndb.Model):    
    name = ndb.StringProperty()    
    description = ndb.TextProperty()
    price = ndb.FloatProperty()
    image = ndb.BlobKeyProperty(required=True)
    count = ndb.IntegerProperty()
    gallery = ndb.BlobKeyProperty(repeated=True)    
    video = ndb.TextProperty(repeated=True)
    category = ndb.TextProperty(repeated=True)    
    date_created = ndb.DateTimeProperty(auto_now_add=True)
    date_modified = ndb.DateTimeProperty(auto_now=True)
    user_created = ndb.KeyProperty(kind=User)
    user_modified = ndb.KeyProperty(kind=User)

class Comment(ndb.Model):
    user = ndb.KeyProperty(kind=User)
    question = ndb.TextProperty()
    comment = ndb.TextProperty()
    reply = ndb.TextProperty()
    product = ndb.KeyProperty(kind=Product)