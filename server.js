var http = require('http');
var fs = require('fs');
var url = require('url');

// Create a server
http.createServer( function (request, response) {  


 var pathname = url.parse(request.url).pathname;
 
 console.log("Request for " + pathname + " received.");
 
 fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
		 
		   response.writeHead(404, {'Content-Type': 'text/html'});
      } else {	
         //Page found	  
         // HTTP Status: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});	
         
         // Write the content of the file to response body
         response.write(data.toString());		
      }
      
      // Send the response body 
      response.end();
   });   
}).listen(8081);


console.log('Server running at http://127.0.0.1:8081/');