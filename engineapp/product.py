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
from google.appengine.api import users
from google.appengine.ext.webapp import template
from logic.product import ProductLogic
import json

class ProductHandler(webapp2.RequestHandler):
    def get(self):
        # prd = product.Product()
        # prd.name = "test"
        # prd.description = "description"
        # prd.price = 1445646
        # prd.count = 20
        # prd.put()
        path = os.path.join(os.path.dirname(__file__), 'templates/index.html')
        user_id = users.get_current_user()
        template_values = ProductLogic.get_products_by_user_key(user_id);
        for prd in template_values:
           #self.response.out.write(prd.key.urlsafe())
           self.response.out.write(json.dumps(prd.to_dict(exclude=['user_created','user_modified','date_created','date_modified']),sort_keys=True))
           #self.response.out.write(template.render(path, template_values))

    def post(self):
        path = os.path.join(os.path.dirname(__file__), 'templates/index.html')
        template_values = {}
        self.response.out.write(template.render(path, template_values))

app = webapp2.WSGIApplication([
    ('/product', ProductHandler)
], debug=True)
