const http = require('http');

http.createServer((request, response) => {
    // Write headers, 200 OK means we got what we are looking for
    response.writeHead(200, {'Content-type': "text/plain"});
    response.write("This is sent from a Node.js server");
    response.end();
}).listen(8888);