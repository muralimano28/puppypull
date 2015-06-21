var Go = require('gonode-master').Go;
 
var options = {
    path        : 'gofile.go',
    initAtOnce  : true, 
}
var go = new Go(options, function(err) {
    if (err)  throw(err);
 
    // TODO: Add code to execute commands
	go.execute({text: 'Hello world from gonode!'}, function(result, response) {
    if(result.ok) {
        console.log('Go responded: ' + response.text);
    } else if(result.timeout) {
        console.log('Command timed out!');
    }   
}, {commandTimeoutSec: 60});  
 
    go.close();
});
