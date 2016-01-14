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
from google.appengine.ext.webapp import template
from modules.stock.model.product import Product

class ProductNewHandler(webapp2.RequestHandler):    
     
    def get(self):
        template_values = {'product': {}     }        
        
        self.response.out.write(template.render('modules/stock/templates/new.html', template_values))
        
    def post(self):                
        product = Product()
        product.name =  self.request.get('name')
        product.description =  self.request.get('description')
        product.put()        
        self.redirect("/product/edit/"+product.key.urlsafe())
        #self.response.redirect()
