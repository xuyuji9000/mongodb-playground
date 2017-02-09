const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient; 

MongoClient.connect('mongodb://admin:admin123@ds147789.mlab.com:47789/testmongo', (err,database) => {
    const app = express();
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.get('/', function(req, res){
        res.sendFile(__dirname + '/index.html');
    });
    
    app.post('/quote', (req, res) => {
        console.log(req.body);
    });
    
    app.listen(3001, function() {
        console.log('listen on 3001');
    });
});
