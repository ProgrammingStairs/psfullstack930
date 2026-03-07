// example

var fs = require("fs");
var pathName = "myFolder/myfile.txt";

if(fs.existsSync(pathName))
    console.log("File Already exist");
else{
    fs.createWriteStream(pathName);
    console.log("File created successfully");
}
