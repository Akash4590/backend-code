const http = require('http');
const data =  20;
const server = http.createServer((req, resp) => {

    resp.setHeader("Content-Type", "text/html");

    resp.write(`
        <html>
            <head>
                <title>Node Server</title>
            </head>

            <body>
                <h1>Hello Akash</h1>
               <h3>`+data+`</h3>
               <h3>`+data+`</h3>
               <h3>`+new Date()+`</h3>
            </body>
        </html>
    `);

    resp.end();
});

server.listen(4800, () => {
    console.log("Server running on port 4800");
});