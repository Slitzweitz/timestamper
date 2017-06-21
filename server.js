//  User Story: I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
//  User Story: If it does, it returns both the Unix timestamp and the natural language form of that date.
//  User Story: If it does not contain a date or Unix timestamp, it returns null for those properties.

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;


// this block will listen for unix timestamps (seconds only, and if less than the current unix time), 
// and also for natural dates, 

app.get('/:times', function(req, res) {
    console.log(req.params.times);
    var date = new Date();
    var prettyDate = date.toDateString();
    var unixTimeSeconds = Math.floor(Date.now() / 1000);
    var regexrNatural = /^[JFMASOND]\w+\s\d+,\s\d{4}$/g;

    // improvement ideas: update to case, switch statements

    if (req.params.times <= unixTimeSeconds) {
        res.send({
            'unix' : req.params.times,
            'natural' : prettyDate
        });
    }
    else if (regexrNatural.test(req.params.times)) {
        res.send({
            'unix' : unixTimeSeconds,
            'natural' : req.params.times
        });
    }
    else {  
        res.send({
            'unix': null,
            'natural': null
        });
    }
    // first make a server that will respond to any request with unix time and natural date
    // first need to extract after the / = accessible via req.path
    // if the req.path is a natural date, return both natural date and unix seconds (1497283013)
    // var path = req.route.path;
    
    // if (isTimestamp(req.path)) {
    //     console.log(req.path, new Date()); //also the string date)
    // }
});

app.listen(port);

// to test, use CURL req in command line: curl https://0.0.0.0:8080/1497283013

// https://github.com/Slitzweitz/timestamper.git

