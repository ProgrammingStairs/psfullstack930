// example showing the concept of promise 

function myFun(){
    return new Promise((resolve,reject)=>{
        var obj = {
            name : "Andrew Anderson",
            age : 56,
            address : "Indore , Madhya Pradesh"
        }
        resolve(obj);
    });
}
myFun().then((obj)=>{
    obj.hobbies = ["Cricket","Hockey","Badminton"]
    return obj;
}).then((receivedObj)=>{
    console.log("Name : "+receivedObj.name);
    console.log("Age : "+receivedObj.age);
    console.log("Address : "+receivedObj.address);
    console.log("Hobbies : "+receivedObj.hobbies);
}).catch((error)=>{
    console.log(error);
});