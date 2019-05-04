//var requests
var dotenv = require('dotenv').config();
var moment = require('moment');
var axios = require("axios");
var keys = require("./keys.js");
var fs = require("fs")
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var input = process.argv[2];
var query = process.argv[3];

function userInputs(input, query){
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

function bandsInTown(query){
    var queryURL = "https://rest.bandsintown.com/artists/" + query + "/events?app_id=codingbootcamp";
    axios.get(queryURL).then(function(response){
        var jsonData = response.data;
        console.log(jsonData);
    })
}
