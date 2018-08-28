

// constructing a queryURL variable we will use instead of the literal string inside of the ajax method
var movieTitleRelease = [];
var movieNameRelease = [];



function searchDate(movie) {
  
 
  var queryURL = "https://www.omdbapi.com/?s=" + movie + "&y=&plot=short&apikey=trilogy";
    
      // Creating an AJAX call for the specific movie button being clicked
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) { 
     // console.log(response);
      
      var movieResults = response.Search;
       for (i=0; i < movieResults.length; i++) {
         var movieList = movieResults[i].Title;
         var movieReleaseDate = movieResults[i].Year;
      //   console.log(movieList);
      //   console.log(movieReleaseDate);
         movieTitleRelease.push(movieList);
         movieTitleRelease.push(movieReleaseDate);
        }
      });
        
    }
    
function searchMovie(movie) {
  var queryURL = "https://utelly-tv-shows-and-movies-availability-v1.p.mashape.com/lookup?country=us&term=" + movie + "";
  $.ajax({
    url: queryURL,
    method: "GET",
    dataType: "json",
    headers: { "X-Mashape-Key": "ETvaxKZbFhmshL3jAAZP4Ylhx0iYp1v9LNHjsnY3CSBvSlVwgt" }

  }).then(function (response) {
    $("#movies").empty();
    var count = 0;
    var result = response.results;
    var releaseYear;
    var j = 0;

    console.log(result);
    $.each(result, function (index, value) {
      // console.log(result[index].name);
      // console.log(result[index]);
      
      
      // console.log(index + ": " + value);
      var topicDIV = $("<p>");
      // Creating a paragraph tag with the result item's rating
      var title = $("<p>").text("Title: " + result[index].name.toUpperCase());

      var topicImage = $("<img>");
      topicImage.attr("src", result[index].picture);
      topicDIV.append(title);
      topicDIV.append(topicImage);

      var streaming = result[index].locations;
      var headerText = $("<p>").text("Streaming Platform:");
    
     
//for comparison
      for (var j=0; j < movieTitleRelease.length ; j++) {
       // console.log("moviename from OD" +movieTitleRelease[j]);
       // console.log("moviename" + result[index].name);
   
        if (movieTitleRelease[j].toLowerCase() === result[index].name.toLowerCase()) {
          releaseYear = movieTitleRelease[j+1];
          var Year = $("<p>").text("Year: " + releaseYear);
          topicDIV.append(Year);
          break;
          console.log(releaseYear);
        }
        
        if (movieTitleRelease.length === j+1) {
        
          var Year = $("<p>").text("Year: NA");
          topicDIV.append(Year);

          

        } 


      };
      var headerText = $("<p>").text("Streaming Platform:");
      topicDIV.append(headerText);
      // 

      $.each(streaming, function (index, value) {
        var icon = $("<img>");
        icon.attr("src", streaming[index].icon ," ");
        topicDIV.append(icon);

      });

      $("#movies").prepend(topicDIV);

    });
 

  });

}

// Event handler for user clicking the select movie button
$("#searchapidata").on("click", function (event) {
  // Preventing the button from trying to submit the form
  event.preventDefault();
  // Storing the artist name
  var inputMovie = $("#searchterm").val().trim();

  // Running the  function (passing in the movie as argument)
  searchDate(inputMovie);

     //  Set the button alert's timeout to run three seconds after the function's called.
     delayButtonAlert = setTimeout(function() {
      
    }, 3000);

  searchMovie(inputMovie);
 // $("#searchterm").val("");

});


