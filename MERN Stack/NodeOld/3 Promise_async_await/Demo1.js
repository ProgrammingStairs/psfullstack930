new Promise((resolve,reject)=>{
    // resolve("Success");
    reject("Error");
}).then(function(msg){
    console.log(msg);
},function(errorMessage){
    console.log(errorMessage);
});