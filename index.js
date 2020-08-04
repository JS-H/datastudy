var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write('Hello Nodejs testtesttest');
    response.end();
}).listen(process.env.PORT);