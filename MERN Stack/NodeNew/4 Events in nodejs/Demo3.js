// example showing the concept of events in nodejs 

var events = require("events");
// console.log(typeof events);
var eventEmitter = new events();

const myFunction1 = ()=>{
    console.log("custom event listner executes - 1");
};
const myFunction2 = ()=>{
    console.log("custom event listner executes - 2");
};
const myFunction3 = ()=>{
    console.log("custom event listner executes - 3");
};

eventEmitter.on('customEvent',myFunction1);
eventEmitter.on('customEvent',myFunction2);
eventEmitter.on('customEvent',myFunction3);

eventEmitter.emit('customEvent');