var http = require("http");
var dotenv = require("dotenv");
const { code,type } = require("./utility/util.js");
dotenv.config();
const instance = http.createServer((request,response)=>{
    response.writeHead(code.SUCCESS,type.TYPE);
    response.write("<h2>This is my first example</h2>");
    response.write("<br>request.url : "+request.url);
    response.write("<br>request.method : "+request.method);
    response.write("<br>request.headers : "+request.headers);
    response.write("<br>request.headers.host : "+request.headers.host);
    response.end();
});

instance.listen(process.env.PORT,()=>{
    console.log("Connection established successfully");
});

