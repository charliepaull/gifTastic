# gifTastic
user can search for gifs, pull 10 results, and pause &amp; animate each gif on the page.

Notes from YouTube Video: 

buttons added to top of page (style, bootstrap, added dynamically through JS)

when clicking on a button, it goes to the giphy API and pulls a number of images from that search queue 
	gifs show up as PAUSED!
	animate & stop function triggered by clicks on the gif
	**created an array of your topic of choice and looped over them to create the buttons

Input form and search box for additional animals that the user wants to search 
	**find out which tags need to be used here from the html**

Description and Details to the app: 
	Functions needed for User Interaction: 
		buttons to click that trigger the api to send 10 gifs (that are paused) to the browser
		an on click function allowing the user to click on the gifs to animate
		search input function (is it an input function tag?) that allows user to look up their preferred topic gif topic (do not use a loop, use .append) 
		submit button that triggers the button to be added to the page 
			use .append 
		create button tag dynamically where anything can be entered into the button. 
	

HTML structure: 
    *header for browser tab
    *button tags - will be looped in dynamically from *the array of strings (that will be our categories)
    *input tag (left blank to have user insert search topic dynamically)
        **header says "add a TV Show, Movie, or Play"
            *submit button for user to add button to page with their respective topic