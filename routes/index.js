var express = require('express');
var router = express.Router();
var path = require('path');
var request = require('request');
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
    res.sendFile(path.join(__dirname+"/../public/Firstpage.html"));
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
	
})
module.exports = router
