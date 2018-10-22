//declare var myFavThings & create array w/ strings (for buttons on page)
favThings = ["Seinfeld", "golden doodles", "Curb Your Enthusiasm", "Dodger baseball", "Hamlet", "Barack Obama", "Dark Knight"]

// Goal: Make Ajax call to giphy API and build callback function to grab & print data to HTML
// **be sure to dynamically insert into button tags in _.each loop


//Goal: Loop through each index in the array & console.log()
// Use _.each() built-in function to loop through array
// syntax: _.each(array, function(parameters){})
// parameters: (element, index, collection)
_.each(favThings, function topics(stuff){
    console.log(stuff);
});