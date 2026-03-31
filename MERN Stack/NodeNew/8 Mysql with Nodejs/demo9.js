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
        var username = 'Jackky Jack';
        var email = 'jack@gmail.com';
        var password = '12345678';
        var address = 'Indore,Madhya Pradesh';
        var query = "update user set username=?,password=?,address=? where email=?";
        var values = [username,password,address,email];
        con.query(query,values,(error,result)=>{
            if(error)
                console.log("Something went wrong : ",error);
            else{
                console.log("Data updated successfully ");
                con.close();
            } 
        });
    }  
});

