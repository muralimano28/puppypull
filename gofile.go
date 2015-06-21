package main

import(
	"fmt"
	gonode "github.com/jgranstrom/gonodepkg"
	json "github.com/jgranstrom/go-simplejson"
)

func main(){
	gonode.Start(process);
}

func process(cmd gonode.CommandData) (response gonode.CommandData){
	
	if(cmd["tags"] == "cute puppy") {
		response["text"] = "downloaded cute puppy"	
	}else{
		response["text"] = "some things are happening"	
	}
	return
}
