var http = require("http");
const instance = http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/html'});
    response.write("<h2>This is my first example</h2>");
    response.end();
});

instance.listen(3000,()=>{
    console.log("Connection established successfully");
});