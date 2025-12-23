new Promise((resolve,reject)=>{
    // resolve("Success");
    reject("Error");
}).then(function(msg){
    console.log(msg);
}).catch(function(errorMessage){
    console.log(errorMessage);
});