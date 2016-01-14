/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

goog.provide("manager.Loader");
goog.require('goog.module.BaseModule');
goog.require('goog.module.ModuleInfo');
goog.require('goog.module.ModuleManager');
goog.require('goog.module.ModuleLoader');

/** @define {string}  URL_BASE_CONFIG Whether logging should be enabled. */
var URL_BASE_CONFIG = "http://localhost:80/";
/** @define {string}  URI_MODULES Preproduction compilation. */
var URI_MODULES = "/sources/cms/js/";


//MODULES
var CMS_MODULE_INFO = {
    "manager": [],
    "cms_loader": ["manager"],
    "cms_dashboard": ["cms_loader"],
    "cms_grid": ["cms_loader"],
    "cms_menuside": ["cms_loader"],
    "cms_toolbar": ["cms_loader"],
    "cms_viewmanager": ["cms_loader"],
    "cms_header": ["cms_loader"]
};
if (!goog.DEBUG) {
    var CMS_MODULE_URIS = {
        "manager": URI_MODULES + "manager.js",
        "cms_loader": URI_MODULES + "loader.js",
        "cms_dashboard": URI_MODULES + "dashboard.js",
        "cms_grid": URI_MODULES + "grid.js",
        "cms_menuside": URI_MODULES + "menuside.js",
        "cms_toolbar": URI_MODULES + "toolbar.js",
        "cms_viewmanager": URI_MODULES + "viewmanager.js",
        "cms_header": URI_MODULES + "viewmanager.js",
    };
} else {
    var CMS_MODULE_URIS = {
        "manager": URI_MODULES + "manager.js",
        "cms_loader": URI_MODULES + "loader.js",
        "cms_dashboard": URI_MODULES + "dashboard.js",
        "cms_grid": URI_MODULES + "grid.js",
        "cms_menuside": URI_MODULES + "menuside.js",
        "cms_toolbar": URI_MODULES + "toolbar.js",
        "cms_viewmanager": URI_MODULES + "viewmanager.js",
        "cms_header": URI_MODULES + "viewmanager.js",
    };
}


var moduleManager = goog.module.ModuleManager.getInstance();
var moduleLoader = new goog.module.ModuleLoader();
moduleManager.setLoader(moduleLoader);
moduleLoader.setDebugMode(true);
moduleManager.setAllModuleInfo(CMS_MODULE_INFO);
moduleManager.setModuleUris(CMS_MODULE_URIS);

/**
 * realiza la busqueda de vuelos
 * @constructor 
 * @extends {goog.ui.Component}
 */
manager.Loader = function () {
    moduleManager.execOnLoad('cms_loader', goog.bind(this.OnModuleSearchLoaded, this));
};

manager.Loader.prototype.OnModuleSearchLoaded = function () {
    debugger;
    moduleManager.execOnLoad('cms_dashboard', goog.bind(function () {

        var dashboard = new officeErp.Dashboard();
        dashboard.render();
        debugger;

    }), this);
};

moduleManager.setLoaded('manager');


//@ sourceURL=manager.js