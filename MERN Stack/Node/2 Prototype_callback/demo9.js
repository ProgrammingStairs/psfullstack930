// example showing the concept of callback

function myFunction(fruitArray,callback){
    setTimeout(()=>{
        callback(fruitArray.sort());
    },2000);
}

var arr = ['Banana','Orange','Mango','Grapes'];
console.log("Before Sorting : "+arr);

var myFun = (result)=>{
    console.log("After sorting : ",result);
}
myFunction(arr,myFun);
