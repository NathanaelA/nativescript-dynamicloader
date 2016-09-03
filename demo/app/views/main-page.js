"use strict";

// We need the utils for the openURL function
var utils = require('utils/utils');

// We want this to look cool, so we animate in and out the pages.  ;-)
var Animation = require('ui/animation').Animation;

// We track our page and which demo
var page, demoId=0;

// Do you see how EASY it is to add another sample example
var pageNames = ['spa', 'colors', 'tabs'];

/**
 * NavigatingTo event
 * we setup the page; and load our first DynamicLoad DUI files
 * @param args
 */
exports.onNavigatingTo = function(args) {
    page = args.object;
    exports.next();
};

/**
 * Increment the Demo Id, and then load that page...
 */
exports.next = function() {
    demoId++;
    if (demoId > pageNames.length) { demoId = 1; }
    switchPage(demoId, 0);
};

/**
 * Decrement the demo Id, and load the next demo
 */
exports.prior = function() {
    demoId--;
    if (demoId < 1) { demoId = pageNames.length; }
    switchPage(demoId, 1);
};

/**
 * Dynamically Unload the current page and Dynamically Load the next page
 * @param id - Page number
 * @param direction - direction
 */
function switchPage(id, direction) {
    var oldPage=null;
    var content = page.getElementById('content');
    var oldPages = content.getElementsByClassName('primary');
    if (oldPages.length) {
        oldPage = oldPages[0];
    }
    oldPages = null;
    content.height = 1000;

    var curPageName = pageNames[id-1];
    var newPage = content.dynamicLoad('~/views/'+curPageName+'/'+curPageName);
    newPage.height = 480;

    if (oldPage) {
        newPage.translateX = direction === 0 ? 500 : -500;
        newPage.translateY = -480;

        var animated = [
            {target: oldPage, translate: {x: direction === 0 ? -500 : 500, y: 0}, duration: 400, curve: 'linear', delay: 0},
            {target: newPage, translate: {x: 0, y: -480}, duration: 400, curve: 'linear', delay: 0}
        ];

        var ani = new Animation(animated);
        ani.play().then(function() {
            oldPage.dynamicUnload();
            newPage.translateY = 0;
            content.height = 500;

            oldPage = null;
        });

    } else {
        content.height = 500;
    }
}

/**
 * Open the appProtection site
 */
exports.appProtect = function() {
    utils.openUrl("https://AppProtection.net");
};

/**
 * Open our sales site
 */
exports.tools = function() {
    utils.openUrl("http://nativescript.tools");
};