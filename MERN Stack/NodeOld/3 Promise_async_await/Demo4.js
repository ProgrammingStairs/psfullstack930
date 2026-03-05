function calculate(num){
    return new Promise((resolve,reject)=>{
        if(num<10)
            resolve(num+num);
        else
            reject(num*num);
    })
}

var num = 15;
var promiseObj = calculate(num);

var pobj = promiseObj.then((num)=>{
    return num*num;
}).catch((num)=>{
    return num+100;
});

pobj.then((res)=>{
    console.log("Resolve : ",res);
});

