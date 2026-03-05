function Employee(){
    this.name = "Andrew Anderson",
    this.address = {
        city : "Indore",
        state: "Madhya Pradesh"
    }
}
Employee.prototype.pincode = 452010;

module.exports.emp = new Employee();
// console.log(module);
 