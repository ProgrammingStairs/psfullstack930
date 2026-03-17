var fs = require("fs");
var pathname = "myfile.txt";
fs.unlink(pathname,(error)=>{
    if(error){
        if(error.code=="ENOENT")
            console.log("File Not Exist");
        else
            console.log("Error : ",error);   
    }
    else
        console.log("File deleted successfully");
});