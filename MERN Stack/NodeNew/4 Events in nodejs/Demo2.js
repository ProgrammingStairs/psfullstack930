// example showing the concept of events in nodejs 

var events = require("events");
// console.log(typeof events);
var eventEmitter = new events();

const myFunction = ()=>{
    console.log("custom event listner executes");
};

eventEmitter.on('customEvent',myFunction);
eventEmitter.on('customEvent',myFunction);
eventEmitter.on('customEvent',myFunction);

eventEmitter.emit('customEvent');