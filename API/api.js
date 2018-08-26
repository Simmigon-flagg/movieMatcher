

// constructing a queryURL variable we will use instead of the literal string inside of the ajax method


var movieTitleRelease = [];

function searchDate(movie) {
  var queryURL = "https://www.omdbapi.com/?s=" + movie + "&y=&plot=short&apikey=trilogy";
    
      // Creating an AJAX call for the specific movie button being clicked
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) { 
      console.log(response);
      
      var movieResults = response.Search;
       for (i=0; i < movieResults.length; i++) {
         var movieList = movieResults[i].Title;
         var movieReleaseDate = movieResults[i].Year;
         console.log(movieList);
         console.log(movieReleaseDate);
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
    console.log(result);
    $.each(result, function (index, value) {
      // console.log(result[index].name);
      // console.log(result[index]);


      // console.log(index + ": " + value);
      var topicDIV = $("<p>");
      // Creating a paragraph tag with the result item's rating
      var title = $("<p>").text("Title: " + result[index].name);

      var topicImage = $("<img>");
      topicImage.attr("src", result[index].picture);
      topicDIV.append(title);
      topicDIV.append(topicImage);

      var streaming = result[index].locations;
      var headerText = $("<p>").text("Streaming Platform:");
      topicDIV.append(headerText);
      $.each(streaming, function (index, value) {
        var icon = $("<img>");
        icon.attr("src", streaming[index].icon ," ");
        topicDIV.append(icon);

      });

      $("#movies").prepend(topicDIV);

    });

    // $("#buttons-view").html("");
    // var movieResults = response.results;
    // console.log(movieResults);

    // var createdHtmlString = "";
    // $.each(results, function (index, value) {
    //   // console.log(index + ": " + value);
    //   var topicDIV = $("<p>");
    //   // Creating a paragraph tag with the result item's rating
    //   var p = $("<p>").text("Rating: " + results[index].rating);

    //   var topicImage = $("<img>");
    //   topicImage.addClass("gif");

    //   topicImage.attr("src", results[index].images.fixed_height_still.url);
    //   topicImage.attr("data-still", results[index].images.fixed_height_still.url);
    //   topicImage.attr("data-animate", results[index].images.fixed_height.url);
    //   topicImage.attr("data-state", "still");
    //   topicDIV.append(p);
    //   topicDIV.append(topicImage);
    //   $("#view-giphy").prepend(topicDIV);
    // });
    for (i = 0; i < movieResults.length; i++) {
      var movieList = movieResults[i];

      //      picture  = results.picture;
      //        name = results.name;

      //For each movie object, create a piece of HTML
      var htmlString = "<div class='movieInfo'> " +
        "<a href='http://imdb.com/title/" +
        movieList['picture'] +
        "/'><img id='posters' src=" +
        movieList['picture'] +
        "></img></a>" +
        "<div class='title'>" +
        movieList['name'] +
        "</div>" +
        "</div>"
      var createdHtmlString = createdHtmlString + htmlString;
    }
    var createdHtmlString;
    $("#buttons-view").append(createdHtmlString);

  });

}

// Event handler for user clicking the select movie button
$("#searchapidata").on("click", function (event) {
  // Preventing the button from trying to submit the form
  event.preventDefault();
  // Storing the artist name
  var inputMovie = $("#searchterm").val().trim();

  // Running the  function (passing in the movie as argument)
  searchMovie(inputMovie);
  searchDate(inputMovie);
  $("#searchterm").val("");

});