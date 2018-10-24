//declare var myFavThings & create array w/ strings (for buttons on page)
var favThings = ["Seinfeld", "golden doodles", "Curb Your Enthusiasm", "Dodger baseball", "Hamlet", "Barack Obama", "Dark Knight"]

// // Goal: Grab Data from API giphy site
// // declare a function & name it getData

// Step 1: loops & add buttons to the html dynamically 
    // declare function renderButtons
    function renderButtons(){
        // Use _.each() built-in function to loop through array
        // Loop through each index in the array
        $("#user-buttons").empty();
        favThings.forEach(function(el) {
        // console.log() el to display object
            console.log(el);
            // declare var arrButtons
            var arrButtons = $("<button>")
            // .addClass of button to arrButtons
            arrButtons.addClass("button");
            // add text
            arrButtons.html(el)
            // append to div id #user-buttons
            $("#user-buttons").append(arrButtons);
        });
    };
    renderButtons();
    
function getData(topics){
// declare var URL & set equal to giphy api + parameter in function + ?app_id=favGifs
    let queryURL = "https://api.giphy.com/v1/gifs/search?api_key=61P15eC1j1CkjvZZBJEBRM2dyPDBtMqL&q=" + topics + "&limit=10&offset=0&rating=PG-13&lang=en" + topics;
    // ajax call
    $.ajax({
        url: queryURL,
        method: "GET"
    // call back function to GET response object
    }).then(function(response) {
        let result = response.data
        console.log(result)
        
    })

    
}

getData();
