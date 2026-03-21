// how to connect node with mysql

var mysql = require("mysql2");
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"node930"
});
con.connect((error)=>{
    if(error)
        console.log("Something went wrong : ",error);
    else{
        var query = "create table if not exists user(uid int not null primary key auto_increment,username varchar(45) not null,email varchar(45) not null,password varchar(45) not null,address varchar(45) not null)";
        con.query(query,(error,result)=>{
            if(error)
                console.log("Something went wrong : ",error);
            else{
                if(result.warningStatus==1)
                    console.log("Table already exist");
                else
                    console.log("Table created successfully ");
                con.close();
            } 
        });
    }  
});

