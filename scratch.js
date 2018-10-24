//declare var myFavThings & create array w/ strings (for buttons on page)
favThings = ["Seinfeld", "golden doodles", "Curb Your Enthusiasm", "Dodger baseball", "Hamlet", "Barack Obama", "Dark Knight"]

// Goal: Make Ajax call to giphy API and build callback function to grab & print data to HTML
// **be sure to dynamically insert into button tags in _.each loop
// https://api.giphy.com/v1/gifs/search?api_key=61P15eC1j1CkjvZZBJEBRM2dyPDBtMqL&q=&limit=10&offset=0&rating=PG-13&lang=en


//Goal: Loop through each index in the array & console.log()
// Use _.each() built-in function to loop through array
// syntax: _.each(array, function(parameters){})
// parameters: (element, index, collection)
// _.each(favThings, function topics(stuff){
//     console.log(stuff);
// });

//Goal: Create function to call giphy API key (use Ajax, call back function)
// Declare a function to wrap the API response
function favorites(hobby){
    // declare var URL & set equal to giphy api + parameter in function + ?app_id=favGifs
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=61P15eC1j1CkjvZZBJEBRM2dyPDBtMqL&q=&limit=10&offset=0&rating=PG-13&lang=en" + hobby + "?app_id=favGifs";
    // Call ajax function: Select .ajax method (use jQuery)
    $.ajax({
        // call the QueryURL var value with key url
        url: queryURL,
        // call "GET" value with method key
        method: "GET"
    // use .then() notation & create callback function with parameter (response): response = is "get" from api
    }).then(function(response){
        // // console.log(response) to print entire object
        console.log(response);
        response.data
        // _.each(favThings, function topics(response){
        //     console.log(response);
        // });        
    })};

    favorites();