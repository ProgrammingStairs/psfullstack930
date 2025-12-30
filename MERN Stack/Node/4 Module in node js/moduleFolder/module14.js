
module.exports = new function Employee(){
    this.name = "Andrew Anderson",
    this.address = {
        city : "Indore",
        state: "Madhya Pradesh"
    },
    this.pincode = 452010,
        this.showDetails = function(){
        console.log("Name : ",this.name);
        console.log("Address : ",this.address);
        console.log("City : ",this.address.city);
        console.log("State : ",this.address.state);
        console.log("Pincode : ",this.pincode);
    }
};

// console.log(module);
 