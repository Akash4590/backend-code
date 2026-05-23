const http = require('http');

const server = http.createServer((req, resp) => {
   // console.log(req.url);
   console.log(req.headers);
   if (req.url == '/') {
      resp.write("<h1>Home page</h1>");
   }
   else if (req.url == '/loginpage') {
      resp.write("<h1>Login page</h1>");
   }
   else if (req.url == '/registerpage') {
      resp.write("<h1>Register page</h1>");
   }
   else {
      resp.write("<h1>404 - Page not found</h1>");
   }
   
   resp.end();
});

server.listen(4800, () => {
   console.log("Server is running on port 4800");
});