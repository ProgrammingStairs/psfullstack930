// example

var fs = require("fs");
var pathName = "myFolder/myfile.txt";
var content = "This is an example of streams in node js";

    var writeStream = fs.createWriteStream(pathName);
    writeStream.write(content);
    writeStream.write(content);

    writeStream.end();

    writeStream.on('finish',()=>{
        console.log("Data inserted successfully");
    })
