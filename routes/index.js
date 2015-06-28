var express = require('express');
var router = express.Router();
var path = require('path');
var request = require('request');
var url = require('url');
//var Go = require('gonode').Go;

var options = {
	path : 'gofile.go',
	initAtOnce : true,
}

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname+"/../public/puppypull.html"));
});

router.get('/fetch',function(req,res,next){

	/*************************************** Creating a http.get request to golang server**********************/
	var tags = req.query.tag;
    console.log("Received tag ",tags);
    var uri;
    if(tags == undefined)
    {
        
        uri = "https://goflickr.herokuapp.com/fetch";
        console.log(uri)
    }
    else
    {
        var output = uri.replace(" ","+");
        uri = "https://goflickr.herokuapp.com/fetch?tag="+output;
        console.log(uri)
    }
	request.get(uri,function(error,response,body){
		res.send(body);	
	});
});

router.get('/upvote',function(req,res,next){
	var id = req.query.id;
	console.log("Received parameter id is ",id);
	var uri = "https://goflickr.herokuapp.com/upvote?id="+id;
	request.get(uri,function(error,response,body){
		if(error)
		{
			console.log("Error occured inside request.get method of /upvote route method\n");
			console.log(error);
		}	
	});
	res.end();	
})

router.get('/downvote',function(req,res,next){
	var id = req.query.id;
	console.log("Received parameter id is ",id);
	var uri = "https://goflickr.herokuapp.com/downvote?id="+id;
	request.get(uri,function(error,response,body){
		if(error)
		{
			console.log("Error occured inside request.get method of /upvote route method\n");
			console.log(error);
		}	
	});
	res.end();	
})
module.exports = router
