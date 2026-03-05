// example showing the concept of callback

function myFunction(fruitArray,callback){
    setTimeout(()=>{
        callback(fruitArray.sort((a,b)=>{
            return b-a;
        }));
    },2000);
}

var arr = [34,78,3,2,678];
console.log("Before Sorting : "+arr);

var myFun = (result)=>{
    console.log("After sorting : ",result);
}
myFunction(arr,myFun);
