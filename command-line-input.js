// const arg =  process.argv;
// console.log("Akash",arg)
const arg = process.argv;
const port  = (arg[2]);
const http = require('http');

http.createServer((req,resp)=>{
  resp.write("Hello command line cmd");
  resp.end();
}).listen(port)