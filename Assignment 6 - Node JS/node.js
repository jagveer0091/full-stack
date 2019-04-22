var http = require('http');
var fs = require('fs');

var server =  http.createServer(function(req,res){
  res.writeHead(200, {'Content-Type': 'text/html'});
   var myReadStream = fs.createReadStream(__dirname + '/index.html');
   myReadStream.pipe(res);
})

server.listen(5000,'127.0.0.1');
console.log('Server is running at port 5000')
