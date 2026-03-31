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
        var query = "select * from user";
        con.query(query,(error,result)=>{
            if(error)
                console.log("Something went wrong : ",error);
            else{
                // console.log(result);
                console.table(result);
                con.close();
            } 
        });
    }  
});

