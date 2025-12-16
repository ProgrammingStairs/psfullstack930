// example of prototype

function Bank(){
    this.setDetails = function(name,actno,bal){
        this.name=name;
        this.actno=actno;
        this.bal=bal;
    }
}
Bank.prototype.showBalance = function(){
    console.log("\nName : ",this.name);
    console.log("AccountNo. : ",this.actno);
    console.log("Balance : ",this.bal);
}
Bank.prototype.deposit = function(damt){
    this.bal = this.bal + damt;
} 
Bank.prototype.withdraw = function(wamt){
    if(wamt>this.bal)
        this.bal = "Not Sufficient Balance";
    else
        this.bal = this.bal-wamt;
} 

const bank = new Bank();
bank.setDetails("Andrew Anderson","ACT123ABC",50000);
bank.showBalance();
bank.deposit(10000);
bank.withdraw(12000);
bank.showBalance();