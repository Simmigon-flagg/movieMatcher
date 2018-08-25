

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
   
     $("#buttons-view").html("");
     var movieResults = response.results;
     console.log(movieResults);

     var createdHtmlString = "";

     for (i=0; i < movieResults.length; i++) {
        var movieList = movieResults[i];

//      picture  = results.picture;
 //        name = results.name;
      
       //For each movie object, create a piece of HTML
       var htmlString = "<div class='movieInfo'> " +
           "<a href='http://imdb.com/title/" +
           movieList['picture' ] +
           "/'><img id='posters' src=" +
           movieList['picture'] +
           "></img></a>" +
           "<div class='title'>" +
           movieList['name']+
           "</div>" +
           "</div>"
       var createdHtmlString = createdHtmlString +  htmlString;
     }
      var createdHtmlString;
     $("#buttons-view").append(createdHtmlString);

   });

 }  
   
     // Event handler for user clicking the select movie button
     $("#search").on("click", function(event) {
       // Preventing the button from trying to submit the form
       event.preventDefault();
       // Storing the artist name
       var inputMovie = $("#searchterm").val().trim();
   
       // Running the  function (passing in the movie as argument)
       searchMovie(inputMovie);
     });