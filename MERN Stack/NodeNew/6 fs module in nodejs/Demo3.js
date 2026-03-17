var fs = require("fs");
var pathname = "myfile.txt";
var newName = "myNewfile.txt";

fs.rename(pathname,newName,(error)=>{
    if(error){
        if(error.code=="ENOENT")
            console.log("File Not Exist");
        else
            console.log("Error : ",error);   
    }
    else
        console.log("File Renamed successfully");
});