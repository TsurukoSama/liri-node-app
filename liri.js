//requests
dotenv = require('dotenv').config();
var moment = require('moment');
var axios = require("axios");
var keys = require("./keys.js");
var fs = require("fs")
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var input = process.argv[2];
var query = process.argv[3];

function userInputs(input, query) {
    switch (input) {
        case 'concert-this': bandsInTown(query)
            break;

        case 'spotify-this-song': spotifySong(query)
            break;
        case 'movie-this': omdb(query)
            break;
        case 'do-what-it-says':
            randomText();
            break;
        default:
            console.log("Invalid Input!")

    }
}

function concertThis(query) {
    if (err) {
        return console.log("Error")
    } else
        var queryURL = "https://rest.bandsintown.com/artists/" + query + "/events?app_id=codingbootcamp";
    axios.get(queryURL).then(function (response) {
        console.log("Venue: " + response.data.venue.name)
        console.log("Location: " + response.data.venue.city)
        console.log("Date: " + (response.data.moment(datetime).format("MM-DD-YYYY")
        ));

    })
}

function spotifyThis(query) {
    spotify.search({ type: 'track', query: value })
    spotify.then(function (response) {
        if (err) {
            return console.log("No Results found. Showing results for 'The Sign' by Ace of Base")
        } else
            var spotifyData = data.tracks.items[0];
        console.log("Artist Name: ", songData.album.artists[0].name)
        console.log("Song Name: ", songData.name)
        console.log("Album Name: ", songData.album.name)
    })
}

function movieThis(query) {
    if (query === undefined) {
        query = "Mr. Nobody"
    } else
        var queryURL = "http://www.omdbapi.com/?t=" + query + "&y=&plot=short&apikey=8d8ea875";
    axios.get(queryURL).then(function (response) {
        if (err) {
            console.log(err)
        }
        console.log("Movie Title: " + response.data.title)
        console.log("Year: " + response.data.year)
        console.log("IMDB Rating: " + response.data.imdbRating)
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[2].Value)
        console.log("Country Produced: " + response.data.Country)
        console.log("Movie Language: " + response.data.Language)
        console.log("Plot: " +response.data.Plot)
        console.log("Actors: " +response.data.Actors)
        
    })
}

function doWhat(){
    fs.readFile("random.txt", "utf8", function(error, data) {

        if (error) {
          return console.log(error);
        }
        console.log(data);
        var data = data.split(",");
      
      });
    }

