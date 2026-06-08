const http = require('http');
const userForm = require('./userForm');
const userDataSubmit =  require('./userDataSubmit');
const { type } = require('os');
http.createServer((req,resp)=>{
resp.writeHead(200,{"content-type":"text/html"}) 
if(req.url==='/'){
userForm(req,resp);
}   
else if(req.url=='/submit'){
     userDataSubmit(req,resp);      
}          

 resp.end("hello world");
})
.listen(3200,()=>{
    console.log("server is running on port 3200");          
})