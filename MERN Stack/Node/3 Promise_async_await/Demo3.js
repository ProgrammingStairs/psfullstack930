function checkNum(num){
    return new Promise((resolve,reject)=>{
        (num%2==0) ? resolve("Even Number") : reject("Odd Number");
    });
}

var num = 100;
var promiseObj = checkNum(num);
promiseObj.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
});