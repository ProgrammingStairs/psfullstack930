// example showing the concept of duplex stream

var {Duplex} = require("stream");
var data;
const duplex = new Duplex({
    write(chunk){
        data = chunk
    },
    read(){
        this.push(data);
        this.push(null);
    }
});
duplex.write("This is an example of duplex stream");
console.log(duplex.read().toString());
