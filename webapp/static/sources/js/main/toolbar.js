goog.provide("officeErp.Toolbar");
goog.require("goog.ui.Component");
goog.require("goog.ui.TabBar");
goog.require("goog.ui.ToolbarSeparator");
 

/**
 * Inicializa el dashboard
 * @constructor 
 * @extends {goog.ui.Component}
 */
officeErp.Toolbar = function () {
    // debugger;
    goog.ui.Component.call(this);
};

goog.inherits(officeErp.Toolbar, goog.ui.Component);

/**
 * Creates an initial DOM representation for the component.
 * @override
 */
officeErp.Toolbar.prototype.createDom = function () {
    goog.base(this, 'createDom');    
    //this.getElement().innerHTML = officeErp.Templates.toolbar();
};

/**
 * Called when component's element is known to be in the document.
 * @override
 */
officeErp.Toolbar.prototype.enterDocument = function () {
    goog.base(this, 'enterDocument');
    //  debugger;
    var tabBar = new goog.ui.TabBar();

    var tabBarElement = goog.dom.createDom("div", {
        class: "goog-tab-bar goog-tab-bar-top"
    });

//    debugger;

    for (var index = 0; index < 4  ; index++) {
        var tab = goog.dom.createDom("div", { class: "goog-tab" });
        goog.dom.setTextContent(tab,"test");
        goog.dom.appendChild(tabBarElement, tab);
    }
    
    goog.dom.appendChild(document.body,tabBarElement);
    tabBar.decorate(tabBarElement);
    
};

/**
 * Called when component's element is known to have been removed from the
 * document.
 * @override
 */
officeErp.Toolbar.prototype.exitDocument = function () {
    goog.base(this, 'exitDocument');
};

/**
 * Registramos el modulo.
 */
//moduleManager.setLoaded('cms_toolbar');


//@ sourceURL=Toolbar.js