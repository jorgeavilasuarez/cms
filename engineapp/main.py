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

variable = 0

class Foo(object):
   bar = 'spam'
   @webapp2.cached_property   
   def foo(self):
       #time.sleep(5)
       # calculate something important here
       #logging.info( "paso en foo" )
       return 42

class BaseHandler(webapp2.RequestHandler):

    @webapp2.cached_property
    def jinja2(self):
        #logging.info( "jinja2" )        
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

    @webapp2.cached_property
    def session(self):
        # Returns a session using the default cookie key.
        return self.session_store.get_session()
    
    @webapp2.cached_property
    def obtenerContador(self):        
        app = webapp2.get_app()
        # Check if the instance is already registered.
        contador = app.registry.get('contador')
        if not contador:            
            contador = 0;
        contador+=1
        app.registry['contador'] = contador
        logging.info( "paso en contador : " + str(contador))
        return contador  

    @webapp2.cached_property
    def obtenerContadorSession(self):
        contador = self.session.get('contador')
        if not contador:            
            contador = 0;
        contador+=1
        self.session['contador'] = contador
        logging.info( "paso en contador : " + str(contador))
        return contador
        

class MainHandlerBase(webapp2.RequestHandler):    
    @webapp2.cached_property
    def obtenerContador(self):        
        app = webapp2.get_app()
        # Check if the instance is already registered.
        contador = app.registry.get('contador')
        if not contador:            
            contador = 0;
        contador+=1
        app.registry['contador'] = contador
        logging.info( "paso en contador : " + str(contador))
        return contador          
   

class MainHandler(BaseHandler):    
     
    def get(self):
        self.response.headers["Cache-Control"] = "must-revalidate, max-age=0"
        #var_foo = Foo()
        #pprint.pprint("1"+str(variable))
        #pprint.pprint("1"+str(var_foo.foo))
        #global variable+=1

        #if self.obtenerContador < 3:
        context = {'app': str(self.obtenerContador),
                   'session': str(self.obtenerContadorSession)
                  }
        self.render_response('index.html', **context)
        #else:
        #  self.response.status = "304 Not Modified"
          # self.response.status_int = 304
          # self.response.status_message = "Not Modified"
          # self.response.headers["Last-Modified"] = "Mon, 29 Jun 2015 02:58:21 GMT"
          # self.response.headers["Etag"] = "f6a7e1a4247146b370f39a0e4b702d61"
        # return    
        #self.response.out.write("paso")
        #self.response.out.write("contador: "+str(self.obtenerContador))
        #path = os.path.join(os.path.dirname(__file__), 'templates/index.html')
        #template_values = {}
        #self.response.out.write(template.render(path, template_values))

config = {}
config['webapp2_extras.sessions'] = {
    'secret_key': 'my-super-secret-key',
}
debug = os.environ.get('SERVER_SOFTWARE', '').startswith('Dev')
app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/cache', 'cache.MyApiHandler')
], debug=debug,config=config)
