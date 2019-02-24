//Variable declaration:

var http = require("http");

function processRequest(req, res) {

var body = "Hello! And welcome to my very first NodeJs server, created for WEB-340.";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080)