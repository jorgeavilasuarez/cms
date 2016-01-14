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


config = {}
config['webapp2_extras.sessions'] = {
    'secret_key': 'my-super-secret-key',
}
debug = os.environ.get('SERVER_SOFTWARE', '').startswith('Dev')
app = webapp2.WSGIApplication([   
   (r'/images/edit/(.*)', 'modules.images.handlers.edit.EditHandler'),
   (r'/images/new', 'modules.images.handlers.new.NewHandler'),
   (r'/.*', 'modules.images.handlers.index.IndexHandler')
    
], debug=debug,config=config)
