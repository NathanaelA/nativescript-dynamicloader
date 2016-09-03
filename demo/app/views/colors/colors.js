"use strict";
/* global getElementById */

var colorPage = 0, page;

/**
 * Our on loaded event, this sets up everything
 * @param args
 */
exports.loaded = function(args) {
    console.log("Colors onloaded!");
    colorPage = 0;
    page = args.object;
    exports.clicker();
};

/**
 * This does the REALLY hard work of dynamically unloading and loading the next page...
 */
exports.clicker = function() {
    colorPage++;
    if (colorPage > 2) { colorPage = 0; }
    var me = page.getElementById('colors');
    me.runAgainstClasses('color', function(elem) { elem.dynamicUnload(); });

    var colorFile = "";
    switch (colorPage) {
        case 0: colorFile = "red"; break;
        case 1: colorFile = "green"; break;
        case 2: colorFile = "blue"; break;
    }
    me.dynamicLoad('~/views/colors/'+colorFile);
};