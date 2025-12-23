// example showing the concept of callback

function myFunction(message,callback){
    setTimeout(()=>{
        callback(message);
    },3000)
}

var message = "Email Sent";
var myFun = function(message){
    console.log(message+"\nTask Completed");
}
myFunction(message,myFun);