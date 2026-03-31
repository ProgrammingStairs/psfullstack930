// how to connect node with mysql

var readLine = require("readline");
var mysql = require("mysql2");
const { error } = require("console");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "node930"
});
var instance = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
con.connect((error) => {
    if (error)
        console.log("Something went wrong : ", error);
    else {
        showMenu();
    }
});

function showMenu() {
    instance.question("Select Option : \n\t1 for Add User\n\t2 for Update User\n\t3 for Delete User\n\t4 for View User\n\t5 for Search specific User\n\t6 for Exit\n\tEnter Choice : ", (option) => {
        switch (option) {
            case '1': addUser();
                break;
            case '2': updateUser();
                break;
            case '3': deleteUser();
                break;
            case '4': viewUser();
                break;
            case '5': searchUser();
                break;
            case '6': exitUser();
                break;
            default: console.log("Invalid Selection");
                con.close();
                instance.close();
                break;
        }
    });
}


function addUser() {
    instance.question("Enter username : ", (username) => {
        instance.question("Enter email : ", (email) => {
            instance.question("Enter password : ", (password) => {
                instance.question("Enter address : ", (address) => {
                    var query = "insert into user (username,email,password,address) values(?,?,?,?)";
                    var values = [username, email, password, address];
                    con.query(query, values, (error, result) => {
                        if (error)
                            console.log("Error : " + error);
                        else {
                            console.log("Data inserted succesfully");
                            showMenu();
                        }
                    });
                });
            });
        });
    });
}

function updateUser() {
    instance.question("Enter email : ", (email) => {
        var query = "select * from user where email=?";
        var value = [email];
        con.query(query, value, (error, result) => {
            if (error)
                console.log("Error : ", error);
            else {
                // console.log(result);
                if (result.length == 0) {
                    console.log("Email does not exist");
                    showMenu();
                } else {
                    instance.question("Enter username : ", (username) => {
                        instance.question("Enter password : ", (password) => {
                            instance.question("Enter address : ", (address) => {
                                var query = "update user set username=?,password=?,address=? where email=?";
                                var values = [username, password, address, email];
                                con.query(query, values, (error, result) => {
                                    if (error)
                                        console.log("Error : " + error);
                                    else {
                                        console.log("Data updated succesfully");
                                        showMenu();
                                    }
                                });
                            });
                        });
                    });
                }
            }
        });
    });
}