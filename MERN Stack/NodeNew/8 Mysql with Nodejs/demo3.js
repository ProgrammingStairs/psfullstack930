// how to connect node with mysql

var mysql = require("mysql2");
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root"
});
con.connect((error)=>{
    if(error)
        console.log("Something went wrong : ",error);
    else  
        console.log("Connection established successfully");
});

