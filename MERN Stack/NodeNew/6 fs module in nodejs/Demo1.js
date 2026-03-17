var fs = require("fs");
var pathname = "myfile.txt";
// fs.open(pathname,'w',(error)=>{
//     console.log("File created successfully");
// });

fs.open(pathname,'wx',(error)=>{
    if(error){
        if(error.code=="EEXIST")
            console.log("File Already Exist");
        else
            console.log("Error : ",error);   
    }
    else
        console.log("File created successfully");
});