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
    else{
        var query = "create database if not exists node9302";
        con.query(query,(error,result)=>{
            if(error)
                console.log("Something went wrong : ",error);
            else{
                if(result.warningStatus==1)
                    console.log("Database already exist");
                else
                    console.log("Database created successfully ");
                con.close();
            } 
        });
    }  
});

