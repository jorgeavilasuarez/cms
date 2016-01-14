goog.provide("officeErp.Header");
goog.require("goog.ui.Component");
goog.require('officeErp.Templates');
goog.require('goog.ui.Toolbar');
goog.require('goog.ui.ToolbarButton');


/**
 * Inicializa el dashboard
 * @constructor 
 * @extends {goog.ui.Component}
 */
officeErp.Header = function () {    
    goog.ui.Component.call(this);
};

goog.inherits(officeErp.Header, goog.ui.Component);

/**
 * Creates an initial DOM representation for the component.
 * @override
 */
officeErp.Header.prototype.createDom = function () {
    goog.base(this, 'createDom');        
    //this.getElement().innerHTML = officeErp.Templates.header();    
};

/**
 * Called when component's element is known to be in the document.
 * @override
 */
officeErp.Header.prototype.enterDocument = function () {
    goog.base(this, 'enterDocument');
    var t1 = new goog.ui.Toolbar();
    t1.addChild(new goog.ui.ToolbarButton('Button'), true);
    t1.getChildAt(0).setTooltip('This is a tooltip for a button');
    t1.addChild(new goog.ui.ToolbarButton('AnotherButton'), true);
    t1.addChild(new goog.ui.ToolbarSeparator(), true);
    t1.addChild(new goog.ui.ToolbarButton('Disabled'), true);  
    t1.render();
};

/**
 * Called when component's element is known to have been removed from the
 * document.
 * @override
 */
officeErp.Header.prototype.exitDocument = function () {
    goog.base(this, 'exitDocument');
};

/**
 * Registramos el modulo.
 */
//moduleManager.setLoaded('cms_header');