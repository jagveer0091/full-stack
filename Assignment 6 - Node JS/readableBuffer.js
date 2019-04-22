var fs = require('fs');

var readMe = fs.readFile('testFile.txt', 'utf8', function(err, data){
  console.log(data);
  fs.writeFile(`saveFile.txt`, data, function(err){
    if (err) throw err;
  });
});
