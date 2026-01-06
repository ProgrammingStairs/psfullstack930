//example showing the concept of events 

var events = require("events");
var eventEmitter = new events();

eventEmitter.on('customEvent',function(){
    console.log("This function is going to be execute-I");
});

eventEmitter.addListener('customEvent',function(){
    console.log("This function is going to be execute-II");
});

eventEmitter.once('customEvent',function(){
    console.log("This function is going to be execute-III");
});

eventEmitter.emit('customEvent');
eventEmitter.emit('customEvent');
eventEmitter.emit('customEvent');
