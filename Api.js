const http =  require('http');
const { json } = require('stream/consumers');

const userdata = [
              {
                            name:"Akash",
                            age:20,
                            email:"akash45@gmail.com"
              },
              {
                            name:"Ahsan",
                            age:23,
                            email:"ahsan7@gmail.com"
              },
              {
                            name:"Ahmad",
                            age:22,
                            email:"ahmad2@gmail.com"
              },
              {
                            name:"Arshad",
                            age:30,
                            email:"arshad33@gmail.com"
              },
              {
                            name:"Aslam",
                            age:25,
                            email:"aslam4@gmail.com"
              },
              {
                            name:"Ali",
                            age:23,
                            email:"ali35@gmail.com"
              },
]

const server =  http.createServer((req,resp)=>{
           resp.setHeader("Content-Type","application/json");
           resp.write(JSON.stringify(userdata)); 
           resp.end();  
});
server.listen(4800,()=>{
        console.log("server is running at 4800")      
})