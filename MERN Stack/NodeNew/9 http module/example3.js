var http = require("http");
var dotenv = require("dotenv");
const { code,type } = require("./utility/util.js");
dotenv.config();
const instance = http.createServer((request,response)=>{
    response.writeHead(code.SUCCESS,type.TYPE);
    if(request.url=="/" || request.url=='/home'){
        response.write("<h2>Home Page</h2>");        
    }
    else if(request.url=="/about"){
        response.write("<h2>About Page</h2>");        
    }
    else if(request.url=="/services"){
        response.write("<h2>Services Page</h2>");        
    }
    else if(request.url=="/faq"){
        response.write("<h2>FAQ Page</h2>");        
    }
    response.end();
});

instance.listen(process.env.PORT,()=>{
    console.log("Connection established successfully");
});

