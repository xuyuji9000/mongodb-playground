const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient; 
const config = require('./config');

MongoClient.connect(config.connect, (err,database) => {
    if (err) return console.log(err);
    db = database;

    // init server
    const app = express();
    app.use(bodyParser.urlencoded({extended:true}));
    

    // routes
    app.get('/', function(req, res){
        res.sendFile(__dirname + '/index.html');
    });
    
    app.post('/quote', (req, res) => {
        db.collection('quote').save(req.body, (err,result) =>{
            if (err) return console.log(err);
            console.log('save to database');
            res.redirect('/');
        });
    });
    
    // start server
    app.listen(3001, function() {
        console.log('listen on 3001');
    });
});
