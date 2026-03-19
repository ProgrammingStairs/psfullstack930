var fs = require("fs");
var newName = "myNewfile.txt";
var content = "This data is going to be inserted into file";

console.log("befor");
// fs.writeFileSync(newName,content);
fs.appendFileSync(newName,content);
console.log("Data inserted successfully");
console.log("after");
