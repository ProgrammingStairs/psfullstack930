var fs = require("fs");
var newName = "myNewfile.txt";
var data = "Now content is going to be inserted in a file";
console.log("before");

fs.writeFile(newName,data,(error)=>{
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
