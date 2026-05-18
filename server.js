const http = require('http');
http.createServer((req,resp)=>{
resp.write("<h1>Hello world</h1>");

resp.end("helo world");
}).listen(4800);