goog.provide("officeErp.Loader");
goog.require("goog.ui.Component");



/**
 * Inicializa el dashboard
 * @constructor 
 * @extends {goog.ui.Component}
 */
officeErp.Loader = function () {
    goog.ui.Component.call(this);
};

goog.inherits(officeErp.Loader, goog.ui.Component);

/**
 * Creates an initial DOM representation for the component.
 * @override
 */
officeErp.Loader.prototype.createDom = function () {
    goog.base(this, 'createDom');
};

/**
 * Called when component's element is known to be in the document.
 * @override
 */
officeErp.Loader.prototype.enterDocument = function () {
    goog.base(this, 'enterDocument');

};

/**
 * Called when component's element is known to have been removed from the
 * document.
 * @override
 */
officeErp.Loader.prototype.exitDocument = function () {
    goog.base(this, 'exitDocument');
};

/**
 * Registramos el modulo.
 */
moduleManager.setLoaded('cms_loader');


//@ sourceURL=loader.js