// how to take values from user

var readline = require("readline");
var instance = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

instance.question("Enter name : ",(name)=>{
    console.log("Welcome ",name);
    instance.close();
});