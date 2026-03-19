var fs = require("fs");
var newName = "myNewfile.txt";

console.log("befor");
var data = fs.readFileSync(newName,'utf-8');
console.log("Data : "+data);
console.log("after");
