// example showing the concept of callback
function display(callback){
    console.log("Loading....");
    setTimeout(()=>{
        var obj = {
            name : "Andrew Anderson",
            address : "Indore , Madhya Pradesh",
            age : 45
        } 
        callback(obj);
    },3000);
}
var result = function(obj){
    console.log(`Hello ${obj.name}, Your age is ${obj.age} and you live in ${obj.address}`);
}
display(result);