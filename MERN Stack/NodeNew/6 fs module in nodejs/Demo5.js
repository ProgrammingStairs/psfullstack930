var fs = require("fs");
var newName = "myNewfile.txt";
var data = "New Data ";
console.log("before");

fs.appendFile(newName,data,(error)=>{
    if(error){
        if(error.code=="ENOENT")
            console.log("File Not Exist");
        else
            console.log("Error : ",error);   
    }
    else
        console.log("Data inserted successfully");
});

console.log("After");
