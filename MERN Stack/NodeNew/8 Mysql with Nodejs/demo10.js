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
        var email = 'jack@gmail.com';
        var query = "delete from user where email=?";
        var values = [email];
        con.query(query,values,(error,result)=>{
            if(error)
                console.log("Something went wrong : ",error);
            else{
                console.log("Data deleted successfully ");
                con.close();
            } 
        });
    }  
});

