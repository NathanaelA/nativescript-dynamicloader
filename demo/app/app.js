var application = require("application");
require('nativescript-dynamicloader');
require('nativescript-dom');

var le = require('nativescript-liveedit');
le.addRestartFile('dynamic.js');
le.addRestartFile('views/main-page.js');

application.start({ moduleName: "views/main-page" });
