// User Story: I can get the IP address, language and operating system for my browser.
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;



// this block will return IP address, language, and operating system for the browser 

app.get('/app/whoami', function(req, res) {
    var language = req.headers['accept-language'].split(',');

    var osStart = req.headers['user-agent'].indexOf('(') + 1;
    var osEnd = req.headers['user-agent'].indexOf(')');
    var os = req.headers['user-agent'].slice(osStart,osEnd);

    console.log(os);
    
    res.send({ 'IP': req.ip, 'language' : language[0], 'os': os });
});

app.listen(port);

