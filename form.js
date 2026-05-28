// const http = require('http');
// http.createServer((req,resp)=>{
// resp.writeHead(200,{"content-type":"text/html"});
// console.log(req.url)
// if(req.url=='/'){
//     resp.write(` <form action = "/submit" method = "post">
//         <label>Name:</label>
//         <input type="text" name="name" placeholder="Enter your name">
//         <br><br>

//         <label>Email:</label>
//         <input type="email" name="email" placeholder="Enter your email">
//         <br><br>

//         <button type="submit">Submit</button>
//     </form>`);
  
// }
// else if(req.url=="/submit"){
//     resp.write('<h1>data submitted<h1/>')
// }


// resp.end();
// })
// .listen(3200,()=>{
// console.log("server is running on port 3200");
// })




const http = require('http');
const fs  = require('fs');
const querystring = require('querystring');

http.createServer((req,resp)=>{
    fs.readFile("html/from.html",'utf-8',(err,data)=>{
    if(err){
        resp.writeHead(500,{"content-type":"text/plain"});
        resp.end("internal server error");
        return;
    }
    resp.writeHead(200,{"content-type":"text/html"});
    if(req.url=='/'){
     resp.write(data);
  
 }
 else if(req.url=="/submit"){
    let databody = []
    req.on('data',(chunk)=>{
        databody.push(chunk);
        req.on("end",()=>{
            let rawdata = Buffer.concat(databody).toString();
            let readabledata = querystring.parse(rawdata);
        
            let datastring = "My name is " + readabledata.name +"my email id is "+readabledata.email;
             console.log(readabledata);
            // fs.writeFileSync("text/"+readabledata.name+".txt",datastring);
            // console.log("file created");
            fs.writeFile("text/"+readabledata.name+".txt",datastring,'utf-8',(err)=>{
                if(err){
                    resp.end("internal server error");
                    return false;
                }
                else{
                    console.log("file created");
                }

            })
            
        })
    })
    resp.write('<h1>data submitted<h1/>')
}
   resp.end()

    })
 
}).listen(3200,()=>{
    console.log("server is running on port 3200");
})