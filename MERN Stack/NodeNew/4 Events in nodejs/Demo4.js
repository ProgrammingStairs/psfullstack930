// example showing the concept of events in nodejs 

var events = require("events");
// console.log(typeof events);
var eventEmitter = new events();

const myFunction1 = ()=>{
    console.log("custom event listner executes - 1");
};

eventEmitter.addListener('customEvent',myFunction1);
eventEmitter.addListener('customEvent',myFunction1);
eventEmitter.addListener('customEvent',myFunction1);

eventEmitter.emit('customEvent');