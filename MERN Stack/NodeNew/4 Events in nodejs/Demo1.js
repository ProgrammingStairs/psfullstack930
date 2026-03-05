// example showing the concept of events in nodejs 

var events = require("events");
// console.log(typeof events);
var eventEmitter = new events();

eventEmitter.on('customEvent',()=>{
    console.log("custom event listner executes");
});

eventEmitter.emit('customEvent');