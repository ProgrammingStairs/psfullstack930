// example

var fs = require("fs");
var pathName = "myFolder/myfile1.txt";
var content = " This is an example of streams in node js";
    var writeStream;
    function writeFun(){
        writeStream = fs.createWriteStream(pathName,{flags:'a'});
        writeStream.write(content);
    }

    if(fs.existsSync(pathName)){
        console.log("File already exist");
        console.log("Now data is going to be insert...");
        writeFun();
    }else{
        console.log("File is going to be create...");
        writeFun();
    }

    writeStream.end();

    writeStream.on('finish',()=>{
        console.log("Data inserted successfully");
    })
