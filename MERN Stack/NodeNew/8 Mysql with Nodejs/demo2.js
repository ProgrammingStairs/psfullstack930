// how to take values from user

var readline = require("readline");
console.log(typeof readline);

var instance = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
console.log(typeof instance);

instance.question("Enter First Number : ",(num1)=>{
   instance.question("Enter Second Number : ",(num2)=>{
    instance.question("Enter Third Number : ",(num3)=>{
        console.log("Sum : "+(parseInt(num1)+parseInt(num2)+parseInt(num3)));
        instance.close();
    });
   });
});