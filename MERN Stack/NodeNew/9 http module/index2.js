var http = require("http");
var url = require('url');
var fs = require('fs');
var dotenv = require("dotenv");
const { code,type } = require("./utility/util.js");
dotenv.config();
const instance = http.createServer((request,response)=>{
    response.writeHead(code.SUCCESS,type.TYPE);
    //http://localhost:3000/home?a=100&b=200

    var requestedURL = url.parse(request.url,true);
    // console.log(requestedURL);
    console.log(typeof requestedURL.query);
    console.log("Result : ",parseInt(requestedURL.query.a)+parseInt(requestedURL.query.b));
    
    if(requestedURL.pathname=="/" || requestedURL.pathname=='/home'){
        var data = fs.readFileSync('Home.html','utf-8')
        response.write(data);        
    }
    response.end();
});

instance.listen(process.env.PORT,()=>{
    console.log("Connection established successfully");
});

