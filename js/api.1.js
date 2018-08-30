// Global Array to capture from omdbapi query
var movieTitleRelease = [];



function storeSearch(movie) {

  var config = {
    apiKey: "AIzaSyC-JOyihZLDnAjsC0yJ2-pThK7bkOADU00",
    authDomain: "moviematch-2a14e.firebaseapp.com",
    databaseURL: "https://moviematch-2a14e.firebaseio.com",
    projectId: "moviematch-2a14e",
    storageBucket: "moviematch-2a14e.appspot.com",
    messagingSenderId: "804612184896"
  };

  firebase.initializeApp(config);
  var searchDatabase = firebase.database();
  var searchName = movie;

  searchDatabase.ref().push({
    searchName: searchName
  });
 

  }

//Function  AJAX query to omdbapi and capture movie title, and year of release
//Input movie - search term
function searchDate(movie) {
  var queryURL = "https://www.omdbapi.com/?s=" + movie + "&y=&plot=short&apikey=trilogy";
    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) { 

    //JSON "Search"
    //            "Title"
    //            "Year"

    var movieResults = response.Search;
      //Loop until end of Search length and capture Movie title, year
      for (i=0; i < movieResults.length; i++) {
        var movieList = movieResults[i].Title;
        var movieReleaseDate = movieResults[i].Year;
        //Add to movieTitleRelease array
        movieTitleRelease.push(movieList);
        movieTitleRelease.push(movieReleaseDate);
      }
    });
        
}

//Funtion AJAX to utelly and capture movie title, poster, where to watch
//Input movie - search term
function searchMovie(movie) {
  var queryURL = "https://utelly-tv-shows-and-movies-availability-v1.p.mashape.com/lookup?country=us&term=" + movie + "";
  // Creating an AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET",
    dataType: "json",
    headers: { "X-Mashape-Key": "ETvaxKZbFhmshL3jAAZP4Ylhx0iYp1v9LNHjsnY3CSBvSlVwgt" }

  }).then(function (response) {
   
    var result = response.results;
    var releaseYear;
    var j = 0;

    //clear html id movies
    $("#movies").empty();
  
    //old school jQuery each() Method to loop results get Title,picture
    $.each(result, function (index, value) {
      
    //JSON "term"
    //            "results"
    //                     "name"
    //                     "locations"
    //                                "name"
    //                                "url"
    //                                "icon"
    
   var topicDIV = $("<p>");
   topicDIV.addClass('moviegroup');
   topicDIV.addClass('col-lg-4');

   
   var title = $("<p style='padding:auto;'>").text("Title: " + result[index].name.toUpperCase());

   var topicImage = $("<img>");

   topicImage.attr("src", result[index].picture);
   topicDIV.append(title);
   topicDIV.append(topicImage);

   var streaming = result[index].locations;
   var headerText = $("<p>").text("Streaming Platform:");
    
    //Perform comparsion of results from omdbapi and utelly of movie title and capture year
    for (var j=0; j < movieTitleRelease.length ; j++) {
      if (movieTitleRelease[j].toLowerCase() === result[index].name.toLowerCase()) {
        releaseYear = movieTitleRelease[j+1];
        var Year = $("<p>").text("Year: " + releaseYear);

        topicDIV.append(Year);
        //breaks the loop and continues executing the code after the loop 
        break;
      }
      if (movieTitleRelease.length === j+1) {
        var Year = $("<p>").text("Year: NA");
        topicDIV.append(Year);
      } 
    };

      //JSON "term"
      //            "results"
      //                     "name"
      //                     "locations"
      //                                "name"
      //                                "url"
      //                                "icon"
      var streaming = result[index].locations;
      var headerText = $("<p>").text("Streaming Platform:");
      //var url = result[index].locations.url;

      topicDIV.append(headerText);

      //old school jQuery each() Method to loop results  get where to watch name, url, icon
      $.each(streaming, function (index, value) {
    
        var streamingIcon = streaming[index].icon;
        var streamingHref = streaming[index].url;
        var topicImage = $('<img class="stream-icon">');

        topicImage.attr("src", streamingIcon);

        var movieStream = $("<a>");
        movieStream.attr("href", streamingHref);
        movieStream.append(topicImage);
        topicDIV.append(movieStream);
      });
  
   $("#movies").prepend(topicDIV);
  
  

   });

  });

  $("#searchterm").val("");
  
}

// Event handler for user clicking the select movie button
$("#searchapidata").on("click", function (event) {
  // Preventing the button from trying to submit the form
  event.preventDefault();


  // Storing the artist name
  var inputMovie = $("#searchterm").val().trim();


  // call function to get year of movie
  searchDate(inputMovie);

  //Set the button alert's timeout to run three seconds after the function's called.
  delayButtonAlert = setTimeout(function() {
  }, 3000);
  // call function to get where to watch movie
  searchMovie(inputMovie);
  
  //store search value to firebase
  storeSearch(inputMovie);
  

});




