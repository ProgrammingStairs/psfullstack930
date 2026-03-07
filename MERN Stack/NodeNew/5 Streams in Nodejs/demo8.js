// example

var fs = require("fs");
// console.log(typeof fs);

var pathName = "myFolder/myfile.txt";
var readStream = fs.createReadStream(pathName,"utf-8");
// console.log(readStream);
readStream.on('data',(chunk)=>{
    // console.log(""+chunk);
    //  console.log(chunk.toString());
     console.log(chunk);
});

readStream.on('end',()=>{
    console.log("Data reading completed");
})
