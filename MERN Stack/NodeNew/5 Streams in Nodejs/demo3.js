// example

var fs = require("fs");
var folderName = "myFolder1/myFolder2";

if(fs.existsSync(folderName))
    console.log("Already exist");
else{
    fs.mkdir(folderName,{recursive:true},(error)=>{
        if(error){
            if(error.code=="EEXIST")
                console.log("Folder Already exist");
            else 
                console.log("Error occured : ",error);
        }
        else
            console.log("Folder created successfully");
    });
}
