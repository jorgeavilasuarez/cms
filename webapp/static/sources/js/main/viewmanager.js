goog.provide("officeErp.ViewManager");
goog.require("goog.ui.Component");



/**
 * Inicializa el dashboard
 * @constructor 
 * @extends {goog.ui.Component}
 */
officeErp.ViewManager = function () {
    // debugger;
    goog.ui.Component.call(this);
};

goog.inherits(officeErp.ViewManager, goog.ui.Component);

/**
 * Creates an initial DOM representation for the component.
 * @override
 */
officeErp.ViewManager.prototype.createDom = function () {
    goog.base(this, 'createDom');
};

/**
 * Called when component's element is known to be in the document.
 * @override
 */
officeErp.ViewManager.prototype.enterDocument = function () {
    goog.base(this, 'enterDocument');
  
};

/**
 * Called when component's element is known to have been removed from the
 * document.
 * @override
 */
officeErp.ViewManager.prototype.exitDocument = function () {
    goog.base(this, 'exitDocument');
};

/**
 * Registramos el modulo.
 */
moduleManager.setLoaded('cms_viewmanager');