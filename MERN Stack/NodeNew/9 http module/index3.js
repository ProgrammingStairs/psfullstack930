var http = require("http");
var url = require('url');
var fs = require('fs');
var dotenv = require("dotenv");
const { code,type } = require("./utility/util.js");
dotenv.config();
const instance = http.createServer((request,response)=>{
    //http://localhost:3000/home?a=100&b=200

    var requestedURL = url.parse(request.url,true);
    // console.log(requestedURL);
    console.log(typeof requestedURL.query);
    console.log("Result : ",parseInt(requestedURL.query.a)+parseInt(requestedURL.query.b));
    
    if(requestedURL.pathname=="/" || requestedURL.pathname=='/home'){
        response.writeHead(code.SUCCESS,type.TYPE);
        var data = fs.readFileSync('Home1.html','utf-8')
        response.write(data);        
        response.end();
    }
    else if(requestedURL.pathname.match('\.css$')){
        response.writeHead(200,{'content-type':'text/css'});
        var data = fs.createReadStream('style.css');
        data.pipe(response);
    }
    else if(requestedURL.pathname.match('\.avif$')){
        response.writeHead(200,{'content-type':'image/avif'});
        var data = fs.createReadStream('banner.avif');
        data.pipe(response);
    }
    
});

instance.listen(process.env.PORT,()=>{
    console.log("Connection established successfully");
});

