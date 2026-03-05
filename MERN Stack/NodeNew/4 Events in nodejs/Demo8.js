// example showing the concept of events in nodejs 

var events = require("events");
class MyEvent extends events{}
var eventEmitter = new MyEvent();

const myFunction1 = ()=>{
    console.log("custom event listner executes - 1");
};
const myFunction2 = ()=>{
    console.log("custom event listner executes - 2");
};

eventEmitter.on('customEvent',myFunction1);
eventEmitter.on('customEvent',myFunction1);
eventEmitter.on('customEvent',myFunction2);

eventEmitter.emit('customEvent');

// eventEmitter.removeAllListeners();
// eventEmitter.removeAllListeners("customEvent");
eventEmitter.removeListener("customEvent",myFunction2);

var res = eventEmitter.listeners("customEvent");
console.log("Listeners : "+res.length);
