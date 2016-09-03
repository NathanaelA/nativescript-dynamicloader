# Nativescript-DynamicLoader-Demo

This shows off some of the functionality of being able to dynamically load files.

The interesting thing about this demo is that it actually dynamically loads contents inside of dynamically loaded content.  And in one example case it is three dynamic loads deep. 

The app is actually very straight forward; it loads the app.js, loads the two plugins and then starts main-page.xml and main-page.js as normal.

## Main-Page

This page dedicates the majority of its space for dynamic content.  The only fixed content is the bottom bar with the Prior / Next and copyright tags.

By clicking next or prior you can change which Demo is dynamically loaded into the viewport.

## Demos

### Continuous dynamic loaded additions
When the demo is dynamically loaded; it loads /views/spa/spa.xml & spa.js -- These are the primary files for this demo.  

You will notice this dynamically loaded file, will then load the first of the files that will be dynamically loaded each time you hit click the button.

Then you click the **Load More...** button, it will then proceed to load a new file each time and add it to the scroll view...
    

### Color Dynamics
When the demo is dynamically loaded; it loads /views/colors/colors.xml and colors.js -- These are the primary files for this demo.

You will notice that again when this demo is loaded it will actually dynamically load the first of the color pages. 
 
When you click the **Next Colors** button, it will automatically unload the current color page; and load the next color page.
  
  
### Tab Dynamics
When the demo is dynamically loaded; it loads /views/tabs/tabs.xml and tabs.js -- These are the primary files for this demo.

You will notice on this demo that we actually trigger our load a tab twice at startup; just so you can see its a tab control..

When you click the **Load a tab** we will load the next tab and append it to the tab list.
When you click the **Remove a tab** we will unload the first tab in the list.
 

### Notes
In the second tab; you will see it actually dynamically loads the green color file showing literally three dynamic loads in a row to make it work.

Demo Files (Tab Demo) -> Tab 2 File -> Color Green File
 
 
### App Protection
Why does it say "Protected by AppProtection.net"?  Well I decided to use this as my sample for the AppProtection service also...
Feel free to peruse the source code here; and compare it to the protected source... 
 
 
