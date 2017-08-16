var http = require('http');
var fs = require('fs');
var extract = require('./extract')

function handleError(error, res) {
  res.writeHead(404);
  res.end();
}

var server = http.createServer(function(req, res) {
  var filepath = extract(req.url);
  fs.readFile(filepath, function(err, data) {
    if (err) {
      handleError(err, res);
    } else {
      res.end(data);
    }
  });
});
server.listen(3000);
