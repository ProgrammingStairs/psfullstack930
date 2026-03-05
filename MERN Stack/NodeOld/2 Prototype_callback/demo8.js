// example showing the concept of callback

function myFun(callback){
    console.log("Before");
        setTimeout(()=>{
            var obj = {
                name:"Andrew Anderson",
                age : 78,
                salary:78000
            }
            callback(obj);
        },5000);
    console.log("After");
}

var printData = (obj)=>{
    console.log(`Hello ${obj.name}, your age is ${obj.age} and you earn ${obj.salary}`);
}
myFun(printData);