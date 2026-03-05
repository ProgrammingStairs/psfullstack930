// example showing the concept of callback hell | pyramid of doom
var num=10;
function myFun(num,callback){
    console.log("num : "+num);
    callback(num+2,(num,callback)=>{
        console.log("num : "+num);
        callback(num+2,()=>{
            console.log("End of program");
        });
    });
}
myFun(num,(num,callback)=>{
    console.log("num : "+num);
    callback(num+2,(num,callback)=>{
         console.log("num : "+num);
         callback();     
    });
});