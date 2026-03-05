// example showing the concept of async await 

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

function secondFun(obj){
    return new Promise((resolve,reject)=>{
        obj.hobbies = ["Cricket","Hockey","Badminton"]
        resolve(obj);
    });
}
async function myFunction(){
    var obj = await myFun();
    var receivedObj = await secondFun(obj);
    console.log("Name : "+receivedObj.name);
    console.log("Age : "+receivedObj.age);
    console.log("Address : "+receivedObj.address);
    console.log("Hobbies : "+receivedObj.hobbies);
}
myFunction();