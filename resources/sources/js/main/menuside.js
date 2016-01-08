goog.provide("cms.MenuSide");
goog.require("goog.ui.Component");



/**
 * Inicializa el dashboard
 * @constructor 
 * @extends {goog.ui.Component}
 */
cms.MenuSide = function () {
    // debugger;
    goog.ui.Component.call(this);
};

goog.inherits(cms.MenuSide, goog.ui.Component);

/**
 * Creates an initial DOM representation for the component.
 * @override
 */
cms.MenuSide.prototype.createDom = function () {
    goog.base(this, 'createDom');
};

/**
 * Called when component's element is known to be in the document.
 * @override
 */
cms.MenuSide.prototype.enterDocument = function () {
    goog.base(this, 'enterDocument');
  
};

/**
 * Called when component's element is known to have been removed from the
 * document.
 * @override
 */
cms.MenuSide.prototype.exitDocument = function () {
    goog.base(this, 'exitDocument');
};

/**
 * Registramos el modulo.
 */
moduleManager.setLoaded('cms_menuside');