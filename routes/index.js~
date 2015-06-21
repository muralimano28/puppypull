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
  //res.render('index', { title: 'Express' });
	/*var go = new Go(options, function(err){
		if(err)
		{
			console.log("Error while connecting to Go");
		}
		go.execute({tag:'cute puppy'},function(result,response){
			if(result.ok){
				console.log('Go responded :' + response.data);			
			}		
		});
		go.close();	
	});*/
    res.sendFile(path.join(__dirname+"/../public/puppypull.html"));
});

router.get('/fetch',function(req,res,next){
	/*var result ={
    "photos": {
        "page": 10,
        "pages": "712",
        "perpage": 10,
        "total": "7114",
        "photo": [
            {
                "id": "15534222683",
                "owner": "17033374@N08",
                "secret": "857719de68",
                "server": "7580",
                "farm": 8,
                "title": "Life is better with a frenchie...",
                "ispublic": 1,
                "isfriend": 0,
                "isfamily": 0
            }
        ]
    },
    "stat": "ok"
} ;*/

	/*************************************** Creating a http.get request to golang server**********************/
	
	var uri = "https://goflickr.herokuapp.com/fetch";
	request.get(uri,function(error,response,body){
		res.send(body);	
	});
});

router.get('/upvote',function(req,res,next){
	var id = req.query.id;
	/*var parts = url.parse(req.url,true);
	var query = parts.query;
	var id = query.id;*/
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
	/*var parts = url.parse(req.url,true);
	var query = parts.query;
	var id = query.id;*/
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
