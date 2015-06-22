# puppypull
Introduction :

Puppy pull is a simple web application that fetches photos of cute puppies from the internet and displays it on a webpage. The visitors to the page can upvote and downvote an image. They can sort the images according to the most voted. Every image will display the number of votes it has received.

Highlights :

Client <---> Node Server <---> Go server (Fetch images from Flickr) <---> MongoDB

Client sends a request to Node server and Node server inturn connects to Go server. Go server fetches data from internet using Flickr API and stores in Mongo database. Go server serves back Node server with JSON data. Node server handles the incoming JSON data and combines it with HTML ,Angular JS and displays it to the client.

To make it work :

1. Clone this respository to your local machine. (Machine should have npm,node and express installed)
2. Install required dependencies from package.json file.
3. Use command “npm start” in the terminal to start the Node server.
4. open browser and go to http://localhost:3000/

Extra Information :

Go server is hosted in Heroku. A simple http.get request will fetch JSON data from that server. 
You can get code for Go server in this link.
