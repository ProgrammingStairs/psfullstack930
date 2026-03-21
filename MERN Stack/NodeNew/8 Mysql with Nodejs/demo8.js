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
        var username = 'Jack Jackson';
        var email = 'jack@gmail.com';
        var password = 'jack@123';
        var address = 'Indore';
        var query = "insert into user(username,email,password,address) values(?,?,?,?)";
        var values = [username,email,password,address];
        con.query(query,values,(error,result)=>{
            if(error)
                console.log("Something went wrong : ",error);
            else{
                console.log("Data inserted successfully ");
                con.close();
            } 
        });
    }  
});

