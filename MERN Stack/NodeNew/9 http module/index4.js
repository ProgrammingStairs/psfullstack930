var http = require("http");
var url = require('url');
var fs = require('fs');
var dotenv = require("dotenv");
const { code,type } = require("./utility/util.js");
dotenv.config();
const instance = http.createServer((request,response)=>{
    response.writeHead(code.SUCCESS,type.TYPE);
    var requestedURL = url.parse(request.url,true);
    if(requestedURL.pathname=="/" || requestedURL.pathname=='/home'){
        var data = fs.readFileSync('register.html','utf-8')
        response.write(data);        
    }
    else if(requestedURL.pathname=='/viewInfo'){
        var data = requestedURL.query;
        response.write("<br>Username : "+data.username);
        response.write("<br>Email : "+data.email);
        response.write("<br>Password : "+data.password);
        response.write("<br>Address : "+data.address);        
    }
    response.end();
    
});

instance.listen(process.env.PORT,()=>{
    console.log("Connection established successfully");
});

