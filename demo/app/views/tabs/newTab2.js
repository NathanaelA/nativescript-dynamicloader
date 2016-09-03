"use strict";
/* global getElementById */

/**
 * Yep, everything dynamically loaded can have a loaded event!
 * @param args
 */
exports.loaded = function(args) {
    console.log("tab2 onLoaded!");
    args.object.dynamicLoad('~/views/colors/green');
};

