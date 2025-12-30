function Employee(){
    this.name = "Andrew Anderson",
    this.address = {
        city : "Indore",
        state: "Madhya Pradesh"
    }
}
Employee.prototype.pincode = 452010;
Employee.prototype.showDetails = function(){
    console.log("Name : ",this.name);
    console.log("Address : ",this.address);
    console.log("City : ",this.address.city);
    console.log("State : ",this.address.state);
    console.log("Pincode : ",this.pincode);
}
module.exports = new Employee();
// console.log(module);
 