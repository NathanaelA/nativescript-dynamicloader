"use strict";
/* global getElementById */

// Setup Tracking
var page, tabId=0;

/**
 * Our loaded event sets up the defaults and loads TWO tabs!
 * @param args
 */
exports.loaded = function(args) {
    tabId = 0;
    page = args.object;
    console.log("tabs onLoaded!");
    exports.clicker();
    exports.clicker();
};

/**
 * Uh Oh, this is really really hard work we are doing here -- Lets add a new Tab
 */
exports.clicker = function() {
    var tabView = page.getElementById('tabView');
    tabId++;
    if (tabId > 3) { tabId = 1; }

    tabView.dynamicLoad("~/views/tabs/newTab"+tabId);
};

/**
 * Ok, maybe this is the really really hard work, lets remove a tab...
 */
exports.remover = function() {
    var tabView = page.getElementById('tabView');

    // Actually there is no reason you can't remove the last tab; but then the page looks plain
    // So we force at least one to be remaining
    if (tabView.items.length > 1) {
        tabView.dynamicUnload(tabView.items[0]);
    }
};