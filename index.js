const express        = require('express');
//const MongoClient    = require('mongodb').MongoClient;
//const db             = require('./config/db');
const bodyParser     = require('body-parser');
const app            = express();
const cors           = require('cors');
const util           = require('util');
var AWS = require('aws-sdk');
var s3 = new AWS.S3();

//const path    		 = require('path');


const port = process.env.PORT || 8000;
app.use(cors());
//use body parser for urlencoded data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/',(req, res)=>{
	console.log("Works");
	res.send({"msg" : "hello there!"});

});
app.get('/test',(req, res)=>{
	console.log("Works");
	res.send({"msg" : "hello there!"});

});



app.get('/listAll',(req, res)=>{
	console.log("S3 listAll called");
	s3.listBuckets(function(err, data) {
  		if (err){
			 console.log(err, err.stack); // an error occurred
			 res.send(err);
			}
  		else  {
			console.log(data);           // successful response
		        res.send(data);
		      }
		});

});
app.post('/listObjects',(req, res)=>{
	console.log("S3 list objects called");
	console.log(JSON.stringify(req.body));

	if(err){
		console.log(err);
		res.send(err);	
	}
	else{
		console.log(data);
		res.send(data);
	}


});

//var AWS = require('aws-sdk');
//var s3 = new AWS.S3();
//require('./app/routes');

app.listen(port, () => {
    console.log('Hey! We are live on ' + port);
  }); 





