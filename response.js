const http  = require('http');
const data = 29;
const response =http.createServer((req,resp)=>{
resp.write(`
              <html>
              <head>
              <title>Backend</title></head>
              <body>
              <h1>Hello world</h1>
              <h2>Hello Akash</h2>
              <h3>`+data+`</h3>
              </body>
              </html>`);
              resp.end("hello world");
})
response.listen(4800,()=>{
              console.log("server is running at port 4800");
})