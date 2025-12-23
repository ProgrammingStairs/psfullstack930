// example showing the concept of callback

function countFun(limit,callback){
    const timer = setInterval(()=>{
        if(limit>0)
            callback(limit--);
        else{
            console.log("Times Up");
            clearInterval(timer);
        }
    },1000);
}

var myFun = (num)=>{
    console.log(num);
}

var limit=10;
countFun(limit,myFun);