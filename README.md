This Repository is an example for explaining an issue in Siemens_IX dropdown in which there are multiple change detections  

the issue is found in ix version 2.4/2.5 with Angular 16

please follow the steps below to show the issue

1- open any browser and install Angular DevTools from (adds on in firefox and webs store for Chromium based browsers)

2- clone this repo, then install and run the application
"npm install && ng serve -o"

3- at this point a browser should be openned, open the browser devTools (F12 or ctrl + shift + I) and open the angular tab.

4- open the profiler tab in the angular tab.

5- click on record button .

6- goto a home page or report page.

7- Click on a drop-down button then click outside to close.

8- Scroll down till the drop-down button disappear from the viewport.
 
You will find change detections invoked by the dropdown although the dropdown is closed, and it is expected that there should be no change detections invoked after the dropdown disappears.
