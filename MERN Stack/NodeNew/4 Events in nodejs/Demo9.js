// example showing the concept of events in nodejs 

var events = require("events");
var eventEmitter = new events();

var dataEvent = ()=>{
    console.log("data event emits");
}
var endEvent = ()=>{
    console.log("end event emits");
}
var finishEvent = ()=>{
    console.log("finish event emits");
}
var errorEvent = ()=>{
    console.log("error event emits");
}

eventEmitter.on("data",dataEvent);
eventEmitter.on("end",endEvent);
eventEmitter.on("finish",finishEvent);
eventEmitter.on("error",errorEvent);

eventEmitter.emit("data");
eventEmitter.emit("end");
eventEmitter.emit("finish");
eventEmitter.emit("error");