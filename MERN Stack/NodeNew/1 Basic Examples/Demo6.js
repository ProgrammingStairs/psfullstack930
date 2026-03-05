// example showing the concept of callback

function display(callback){
    console.log("This is display function");
    callback();
}
display(function(){
    console.log("This is an example of callback");
});