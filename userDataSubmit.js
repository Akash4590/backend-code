const querystring = require('querystring');

function userDataSubmit(req, resp) {
    let databody = [];

    req.on('data', (chunk) => {
        databody.push(chunk);
    });

    req.on('end', () => {
        let rawdata = Buffer.concat(databody).toString();
        let readabledata = querystring.parse(rawdata);

        let datastring =
            "My name is " +
            readabledata.name +
            " and my email is " +
            readabledata.email;
             console.log(datastring);
        

        resp.write(`
            <h1>You can get data from user form here</h1>
    
        
           
        `);

        resp.end();
    });
}

module.exports = userDataSubmit;