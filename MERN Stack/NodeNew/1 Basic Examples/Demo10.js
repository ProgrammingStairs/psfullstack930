// example showing the concept of promise 

function myFun(num){
    return new Promise((resolve,reject)=>{
        (num%2==0) ? resolve("Even number") : reject("Odd Number");
    });
}

var num = 458;
myFun(num).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});