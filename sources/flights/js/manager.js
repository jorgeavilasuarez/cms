/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

goog.provide("manager.Loader");
goog.require('goog.module.BaseModule');
goog.require('goog.module.ModuleInfo');
goog.require('goog.module.ModuleManager');
goog.require('goog.module.ModuleLoader');
goog.require('goog.style');

/** @define {string}  URL_BASE_CONFIG Whether logging should be enabled. */
var URL_BASE_CONFIG = "http://localhost:8080/";
/** @define {string}  URI_MODULES Preproduction compilation. */
var URI_MODULES = "/sources/flights/js/";


//MODULES
var TC_MODULE_INFO = {
    "manager": [],
    "flights_search": ["manager"],
    "flights_results": ["flights_search"],
    "flights_register": ["flights_results"]
};
if (!goog.DEBUG) {
    var TC_MODULE_URIS = {
        "manager": URI_MODULES + "manager.js",
        "flights_search": URI_MODULES + "technocloud_flights_search.js",
        "flights_results": URI_MODULES + "technocloud_flights_results.js",
        "flights_register": URI_MODULES + "technocloud_flights_register.js"
    }
} else {
    var TC_MODULE_URIS = {
        "manager": URI_MODULES + "manager.js",
        "flights_search": URI_MODULES + "search.js",
        "flights_results": URI_MODULES + "results.js",
        "flights_register": URI_MODULES + "register.js"
    }
}


var moduleManager = goog.module.ModuleManager.getInstance();
var moduleLoader = new goog.module.ModuleLoader();
moduleManager.setLoader(moduleLoader);
moduleLoader.setDebugMode(true);
moduleManager.setAllModuleInfo(TC_MODULE_INFO);
moduleManager.setModuleUris(TC_MODULE_URIS);

/**
 * realiza la busqueda de vuelos
 * @constructor 
 * @extends {goog.ui.Component}
 */
manager.Loader = function () {
    //cargamos los estilos 
    if (!goog.DEBUG) {
        goog.net.XhrIo.send(URI_MODULES + "STYLES.CSS", function (obj) {
            try {                
                MODULE_FLIGHTS_SEARCH_CSS = obj.currentTarget.getResponseText();
                MODULE_FLIGHTS_RESULTS_CSS = MODULE_FLIGHTS_SEARCH_CSS;
                MODULE_FLIGHTS_REGISTER_CSS = MODULE_FLIGHTS_SEARCH_CSS;
                goog.style.installStyles(MODULE_FLIGHTS_SEARCH_CSS);
            } catch (e) {
            }
        }, "GET", null);
    }
    //debugger;
    //Cargamos el modulo de busqueda
    moduleManager.execOnLoad('flights_search', goog.bind(this.OnModuleSearchLoaded, this));
};

manager.Loader.prototype.OnModuleSearchLoaded = function () {

    if (typeof (this.objSearch) !== "undefined") {
        this.objSearch.dispose();
    }
};

moduleManager.setLoaded('manager');
var objSearch = new manager.Loader();