

// constructing a queryURL variable we will use instead of the literal string inside of the ajax method


function searchMovie(movie) {
  var queryURL = "https://utelly-tv-shows-and-movies-availability-v1.p.mashape.com/lookup?country=us&term="+ movie +"";
  $.ajax({
  url: queryURL,
  method: "GET",
  dataType: "json",
  headers: { "X-Mashape-Key": "ETvaxKZbFhmshL3jAAZP4Ylhx0iYp1v9LNHjsnY3CSBvSlVwgt" }

}).then(function (response) {

  // $("#movies").text(JSON.stringify(response));
  console.log(response);
  console.log(response.Runtime);

  // Creating a div to hold the movie
    var movieDiv = $("<div class='movie'>");

    // Creating an element to have the title displayed
    var movieTitle = response.results.name;
    var picture = response.results.picture;
    var locationName =resposne.results.locations.name;
    var locationUrl =resposne.results.locations.name.url;
    var locationIcon =resposne.results.locations.name.icon;

    
    //Title of move
    var pOne = $("<p>").text("Title: " + movieTitle);
    movieDiv.append(pOne);
      
    //picture of movie
    var pTwo = $("<img>").attr("src " + picture);
    movieDiv.append(pTwo);
    
    // location of movie avaiablle
    var pThree = $("<p>").text("Location: " + locationName);
    // appending location
    movieDiv.append(pThree);
    
    //location of movie url available
    var pFour = $("<p>").attr("Location Url", locationUrl);
    movieDiv.append(pFour);

    //icon of location available
    var pFive = $("<img>").attr("src", locationIcon);
    movieDiv.append(pFive);

    // Putting the entire movie above the previous movies
    $(".streamingTitles").empty();
    $(".streamingTitles").prepend(movieDiv);
  });

}


  // Event handler for user clicking the select-artist button
  $("#search").on("click", function(event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the artist name
    var inputMovie = $("#searchterm").val().trim();

    // Running the searchBandsInTown function (passing in the artist as an argument)
    searchMovie(inputMovie);
  });

