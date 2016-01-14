goog.require("goog.ui.Component");
goog.provide("officeErp.App");
goog.require("officeErp.Header");
goog.require("officeErp.Toolbar");
goog.require("officeErp.ViewManager");


/**
 * Inicializa el dashboard
 * @constructor 
 * @extends {goog.ui.Component}
 */
officeErp.App = function () {
    goog.ui.Component.call(this);    
    this.header = new officeErp.Header();
    this.toolbar = new officeErp.Toolbar();
    this.viewManager = new officeErp.ViewManager();
};

goog.inherits(officeErp.App, goog.ui.Component);


/**
 * Creates an initial DOM representation for the component.
 * @override
 */
officeErp.App.prototype.dashboard;

/**
 * Creates an initial DOM representation for the component.
 * @override
 */
officeErp.App.prototype.createDom = function () {
    goog.base(this, 'createDom');
    this.setId("app");
};

/**
 * Called when component's element is known to be in the document.
 * @override
 */
officeErp.App.prototype.enterDocument = function () {
    goog.base(this, 'enterDocument');
    this.header.render();
    this.toolbar.render();
};

/**
 * Called when component's element is known to have been removed from the
 * document.
 * @override
 */
officeErp.App.prototype.exitDocument = function () {
    goog.base(this, 'exitDocument');
};

/**
 * Registramos el modulo.
 */
//moduleManager.setLoaded('cms_dashboard');


//@ sourceURL=app.js