var http = require('http');


var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'application/json'});
  var JSONData = {
    name : 'Himanshu Chauhan',
    RollNo: '1610991365'
  };
  res.end(JSON.stringify(JSONData));
});

server.listen(5000, '127.0.0.1');
console.log('Server is listening to port 5000');
