const express = require('express'); 
const app = express();
const path = require('path');

const port = 5000;
const engines = require('consolidate');
const mustache = require("mustache");

app.set('views', __dirname + "/public");
app.engine('html', engines.mustache);
app.set('view engine', 'html');


/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.get('/nfts/:ethaddress', function(req, res, next) { 
    x = req.params.ethaddress
    res.render('index1', { name: x });                                                  
});

app.get('/tokens/:ethaddress',function(req, res, next) {        
    x = req.params.ethaddress
    res.render('index2', { name: x });                                                
});


app.listen(port, () => {          
    console.log(`Now listening on port ${port}`); 
});