function Employee(){
    this.name = "Andrew Anderson";
    this.age = 45;
}
Employee.prototype.address = "Indore,Madhya Pradesh";
Employee.prototype.showDetails = function(){
    console.log("Name : "+this.name);
    console.log("Age : "+this.age);
    console.log("Address : "+this.address);
}
const emp = new Employee();
emp.showDetails();
