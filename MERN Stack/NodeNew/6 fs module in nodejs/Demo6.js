var fs = require("fs");
var newName = "myNewfile.txt";

fs.readFile(newName,"utf-8",(error,data)=>{
    if(error){
        if(error.code=="ENOENT")
            console.log("File Not Exist");
        else
            console.log("Error : ",error);   
    }
    else
        console.log("Data : ",data);
});

