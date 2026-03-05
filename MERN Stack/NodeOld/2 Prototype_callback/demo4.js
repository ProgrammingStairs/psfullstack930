// example showing the concept of callback

function myFunction(callback){
    console.log("This is Higer Order Function");
    callback();
}

myFunction(()=>{
    console.log("This is an example of callback");
});