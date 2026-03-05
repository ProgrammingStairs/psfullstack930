// Asynchronous 

function gotoroom(){
    console.log("gotoroom");
}
function removegarbage(){
    console.log("removegarbage");
}
function wonprize(){
    console.log("wonprize");
}
console.log("1");

setTimeout(gotoroom);
setInterval(removegarbage,2000);
setImmediate(wonprize);
console.log("2");
