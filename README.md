
# Nativescript-DynamicLoader
A NativeScript plugin to dynamically load/unload Declarative UI code (xml/js) into your existing UI.

## License

This is released under a COMMERCIAL License PER developer -- you can purchase this plugin (and others) and support at [http://nativescript.tools](http://nativescript.tools).

I also do contract work; so if you have a module you want built for NativeScript (or any other software projects) feel free to contact me [nathan@master-technology.com](mailto://nathan@master-technology.com).

[![Donate](https://img.shields.io/badge/Donate-PayPal-brightgreen.svg?style=plastic)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=HN8DDMWVGBNQL&lc=US&item_name=Nathanael%20Anderson&item_number=nativescript%2dglobalevents&no_note=1&no_shipping=1&currency_code=USD&bn=PP%2dDonationsBF%3ax%3aNonHosted)
[![Patreon](https://img.shields.io/badge/Pledge-Patreon-brightgreen.svg?style=plastic)](https://www.patreon.com/NathanaelA)


## Screen Shots Examples

![Screens](docs/nativescript-dl0.gif =300x)
![Continous](docs/nativescript-dl1.gif =300x)
![Colors](docs/nativescript-dl2.gif =300x)
![Tabs](docs/nativescript-dl3.gif =300x)




## Installation 

`tns plugin add nativescript-dynamicloader.tgz`


## Usage

To use the module you just `require()` it:

```js
require( "nativescript-dynamicloader" );
or
var dynamic = require('nativescript-dynamicloader');
```

Notice: You do NOT need to keep a reference to it, unless you need the manual "load" version; and you only need to load it once.

It will automatically attach its methods to all the proper classes in the NativeScript library making it act as if they are built in.

Please note: for simplicity sake in these samples; I'm use helpers and methods from the NativeScript-DOM plugin.

```js
require('nativescript-dynamicloader'); // need only once in the application total

exports.onClickRed = function() {
    // Find any classes that have been tagged as "dynamicColros" and unload them..
    runAgainstClassNames('dynamicColors', function (elem) { elem.dynamicUnload(); });

    var parentElement = getElementById('parentWrapper');
      parentElement.dynamicLoad('~/views/colors/red');
      parentElement.dynamicLoad('~/views/colors/orange');
      parentElement.dynamicLoad('~/views/colors/pink');    
}

```

## Why use this?
This allows you to dynamically load a part of the Declarative UI and its associated JS file into memory dynamically.  The JS is its own module; so it does not effect the rest of the page nor does the other part of the pages JS affect it.
 

## Commands and functions


### someViewElement.dynamicLoad(path, options) -- Automatic Method
- **path** - Your path from the app directory to the files you are loading
- **Options** - Object of options 
  - **page** - the page element, if not set it will attempt to use the currentPage; however depending on if you call this function during navigation, the current page maybe the old page.
  - **mergeSource**  - False (default), True (for all), or an Array of function names exported from the Source page's exports to merge into the exports of the newly loaded JS file in the dynamically loaded file. (Only names not already existing.)
  - **mergeDynamic** - False (default), True (for all), or an Array of function names exported from the Dynamic page's exports to merge into the source's exports.   (Only names not already existing.)
  - **mergeForce** - False (default), True - Force names to be cloned onto the other exports, even if they already exist on the destination exports.
- **RETURNS** the top most element that was loaded and attached to the `someParentElement`  

Loads the path Declarative UI into the someViewElement children... 

Example:
```
// Dynamically load and attach three tabs
var tabView = getElementById('myTabView');
tabView.dynamicLoad('~/colors/blue');
tabView.dynamicLoad('~/colors/green');
tabView.dynamicLoad('~/colors/red');
```



### dynamic.load(path, options) -- Manual Method
- **path** - Your path from the app directory to the files you are loading
- **Options** - Object of options 
  - **page** - the page element, if not set it will attempt to use the currentPage; however depending on if you call this function during navigation, the current page maybe the old page.
  - **mergeSource**  - False (default), True (for all), or an Array of function names exported from the Source page's exports to merge into the exports of the newly loaded JS file in the dynamically loaded file. (Only names not already existing.)
  - **mergeDynamic** - False (default), True (for all), or an Array of function names exported from the Dynamic page's exports to merge into the source's exports.   (Only names not already existing.)
  - **mergeForce** - False (default), True - Force names to be cloned onto the other exports, even if they already exist on the destination exports.
- **RETURNS** the top most element that was loaded.   **YOU MUST ATTACH IT TO A PARENT for it to show**

Loads the path declarative UI files and returns it only; the manual way is more useful when you need to dynamically load and deal with setting up the parent manually or creating an array of them.  
Remember the **MANUAL method does NOT** attach the returned elements to a parent; you must do that to show it... 
Example:
```
var items = [];
var dynamic = require('nativescript-dynamicloader');

// Dynamically load three tabs
items.push(dynamic.load('~/colors/blue'));
items.push(dynamic.load('~/colors/green'));
items.push(dynamic.load('~/colors/red'));

var tabView = getElementById('myTabView');
// Make our three dynamically loaded tabs the tabs...   So we are setting up the parent now...
tabView.items = items;
```



### someDynamicallyLoadedElement.dynamicUnload()
### someParentElement.dynamicUnload(dynamicallyLoadedChildElement)
- element - the element you want unloaded

Unloads the dynamically loaded element either passed in, or found.
Example:
```
var myLoadedElement = getElementById('myLoadedElement');
myLoadedElement.dynamicUnload();
console.log("Element has been unloaded");
```

