goog.provide("cms.Dashboard");
goog.require("goog.ui.Component");


/**
 * Inicializa el dashboard
 * @constructor 
 * @extends {goog.ui.Component}
 */
cms.Dashboard = function () {    
    goog.ui.Component.call(this);
};

goog.inherits(cms.Dashboard, goog.ui.Component);

/**
 * Creates an initial DOM representation for the component.
 * @override
 */
cms.Dashboard.prototype.createDom = function () {
    goog.base(this, 'createDom');    
    this.setId("dashboard");
};

/**
 * Called when component's element is known to be in the document.
 * @override
 */
cms.Dashboard.prototype.enterDocument = function () {
    goog.base(this, 'enterDocument');
  
};

/**
 * Called when component's element is known to have been removed from the
 * document.
 * @override
 */
cms.Dashboard.prototype.exitDocument = function () {
    goog.base(this, 'exitDocument');
};

/**
 * Registramos el modulo.
 */
moduleManager.setLoaded('cms_dashboard');

//@ sourceURL=dashboard.js