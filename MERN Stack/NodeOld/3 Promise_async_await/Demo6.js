function checkNum(num){
    return new Promise((resolve,reject)=>{
        (num>=0) ? resolve("Positive Number") : reject("Negative Number"); 
     });
}

async function myFun(num){
    try{
        
        console.log("Before Await");
            var res = await checkNum(num);
            console.log("Resolve : ",res);
        console.log("After Await");

    }catch(error){
        console.log("Reject : ",error);
    }
}
var num = 57;
myFun(num);