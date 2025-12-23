function calculate(num){
    return new Promise((resolve,reject)=>{
        if(num<10)
            resolve(num+num);
        else
            reject(num*num);
    })
}

async function myFun(num){
    try{
            var res = await calculate(num);
            return res*res;
    }catch(error){
        return error+100;
    }
}
var num = 15;
myFun(num).then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
});

