// example showing the concept of callback

var a = 5;
var b = 8;
function calculation(a,b,operation,callback){
    var result;
    switch(operation.toLowerCase()){
        case "addition" : result = a+b;
                            break;
        case "subtraction" : result = a-b;
                            break;
        case "multiplication" : result = a*b;
                            break;
        case "division" : result = a/b;
                            break;
        case "modulus" : result = a%b;
                            break;
        default : result = "Invalid Operation";
                            break;                    
    } 
    callback(result);
}

var myFun = (result)=>{
    console.log("Result : ",result);
}
calculation(a,b,"Multiplication",myFun);