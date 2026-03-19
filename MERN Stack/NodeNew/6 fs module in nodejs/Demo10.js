var fs = require("fs");
var record = "record.txt";

var data = fs.readFileSync(record,'utf-8');
var name;
var res=0;
for(i=0;i<data.length;i++){
    if(data[i]=="\n"){
        name = data.slice(res,i);
        res = i+1;
        console.log("Filename : "+name+"\nFile Content : "+fs.readFileSync(name,'utf-8'));        
    }
}