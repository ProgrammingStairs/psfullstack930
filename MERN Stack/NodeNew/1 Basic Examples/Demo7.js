// example showing the concept of callback
function display(a,b,callback){
    callback(a+b);
}
var num1 = 100;
var num2 = 200;
var result = function(sum){
    console.log("sum : "+sum);
}
display(num1,num2,result);