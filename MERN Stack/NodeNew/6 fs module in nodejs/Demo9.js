var fs = require("fs");
var filename = new Date().getMilliseconds()+"_file.txt";
var record = "record.txt";
var content = "This data is going to be inserted into "+filename;

fs.writeFileSync(filename,content);
fs.appendFileSync(record,filename+"\n");
console.log("Data inserted successfully");
