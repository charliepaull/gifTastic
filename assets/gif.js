// Declare var myFavThings & create array w/ 7 indicies
var favThings = ["Seinfeld", "golden doodles", "Curb Your Enthusiasm", "Dodger baseball", "Hamlet", "Barack Obama", "Dark Knight"]

// Step 1: loops & add buttons to the browser dynamically 
    // declare function renderButtons
    function renderButtons(){
        // Use for loop to loop through array
        // Loop through each index in the array
        $("#user-buttons").empty();
        favThings.forEach(function(el) {
        // console.log() el to display object
            console.log(el);
            // declare var arrButtons
            var arrButtons = $("<button>")
            // .addClass of button to arrButtons
            arrButtons.addClass("button");
            // add attr
            arrButtons.attr("things", favThings[i]);
            // add text
            arrButtons.html(el);
            // append to div id #user-buttons
            $("#user-buttons").append(arrButtons);
        });
    };
    

// create an on-click function
$("button").on("click", function(){
    // declare var topics & grab data from buttons
    var topics = $(this).attr("things")
    // declare variable queryURL & add api link
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=61P15eC1j1CkjvZZBJEBRM2dyPDBtMqL&q=" + topics + "&limit=10&offset=0&rating=PG-13&lang=en";

    // ajax call
    $.ajax({
        url: queryURL,
        method: "GET"
    // call back function to GET response object
    }).then(function(response) {
        console.log(response);

    // declare var results & set to response object
        var result = response.data;
        
    })
});
renderButtons();
