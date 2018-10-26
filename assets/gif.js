// Declare var myFavThings & create array w/ 7 indicies
var favThings = ["Seinfeld", "golden retrievers", "Curb Your Enthusiasm", "Dodger baseball", "Hamlet", "Barack Obama", "Dark Knight", "Daisey Ridley"];

// Step 1: loops & add buttons to the browser dynamically 
// declare function renderButtons
function renderButtons(){
    // Use for loop to loop through array
    // Loop through each index in the array
    $("#user-buttons").empty();
    for (var i = 0; i < favThings.length; i++) {
        // declare var arrButtons
        var arrButtons = $("<button>");
        // .addClass of button to arrButtons
        arrButtons.addClass("button");
        // add attr
        arrButtons.attr("data-topics", favThings[i]);
        // add text
        arrButtons.text(favThings[i]);
        // append to div id #user-buttons
        $("#user-buttons").append(arrButtons);
    };
};

renderButtons();


// Goal: Add button through user input & submit button
// declare function & name addButton
function addButton(){
    // Select #submit ID & make a callback function (set parameter as event)
    $("#submit").on("click", function(event){
    // use event.preventDefault() to stop form from submitting
        event.preventDefault();
        // declare var uniqueArr  & use $.unique jQuery method to sort out duplicates 
        // var uniqueArr = $.unique(favThings.sort()).sort();
        // if (uniqueArr === favThings){
        //     return uniqueArr
        // } else{        
        // declare var input & capture value of user input from search box 
        var input = $("#search").val().trim();

        // Make empty unique array
        uniqueArr = {};
        // Create IF statement & alert user if no value added to input
        if (!input){
            input = "";
            alert("Add your giphy category!");
            return
        };
        
        dupe = uniqueArr.input;
        // create for loop
        for (i=0; i<favThings.length; i++){
            // if item in favThing equals dupe (item repeats)
            if(favThings[i].input === dupe){
                return
            }
        };
        // push value from input into favThings array
        favThings.push(favThings);
        JSON.stringify(favThings);
        // call function renderButtons to append user search to array  
        renderButtons();
        // }
    });
}

addButton();

// function buttonOnClick() {
// create an on-click function
$(document).on("click", ".button", function(){
    // empty the gifDiv to reset
    $("#gifs-appear-here").empty();
    // declare var topics & grab data from buttons
    var topics = $(this).attr("data-topics")
    // declare variable queryURL & add api link
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=61P15eC1j1CkjvZZBJEBRM2dyPDBtMqL&q=" + topics + "&limit=10&offset=0&rating=R&lang=en";

    // ajax call
    $.ajax({
        url: queryURL,
        method: "GET"
    // call back function to GET response object
    }).then(function(response){
    // console.log response to check if object works
        console.log(response);
    // declare var result & set to response object
        var result = response.data;
        // make for loop - looping through 10 gifs to add to browser
        for (var i = 0; i < result.length; i++){
        // dynamically create parent div - will later append p & img tags
            var gifDiv = $("<div>");
            // declare var rating & store rating from response object
            var rating = result[i].rating;
            // declare var p & dynamically create p tag that holds gif rating
            var p = $("<p>").text(rating);
            // declare var gifImg & dynamically create img tag, holds gif url
            var gifImg = $("<img>");
            // grab img url from response object & add src attritube, all set to gifImg
            gifImg.attr("src", result[i].images.fixed_height.url);

            // append p & gifImg tags to parent div (gifDiv)
            gifDiv.append(p, gifImg);

            // prepend
            $("#gifs-appear-here").prepend(gifDiv);

           
        }
        
        
    });
});
