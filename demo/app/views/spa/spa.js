"use strict";
/* global getElementById */

// Tracking Variables for simplicity
var spaDemo = 0;
var page;

/**
 * The OnLoaded event
 * @param args
 */
exports.loaded = function(args) {
    spaDemo = 0;
    page = args.object;
    console.log("spa onLoaded!");
    exports.clicker();
};


/**
 * This does all the "oh so" HARD work to load the next Single Page DUI file
 */
exports.clicker = function() {
    spaDemo++;
    if (spaDemo > 4) {
        spaDemo = 1;
    }
    var Scroller = page.getElementById('SPA');
    Scroller.dynamicLoad("~/views/spa/spa" + spaDemo);
};