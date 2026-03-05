// example of prototype

function Vehicle(){
    this.name = "Audi"
    this.model = 2025
    this.color = "black"  
    this.welcomeMessage = ()=>{
        console.log("Welcome to car show room");
    }
}

Vehicle.prototype.printData = function(){
    return this.name+" "+this.model+" "+this.color;
}
const obj = new Vehicle();
obj.welcomeMessage();
console.log("Details : "+obj.printData());
