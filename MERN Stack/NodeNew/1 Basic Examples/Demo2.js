var p = 1000;
var r = 2.34;
var t = 3;
var amt = p*Math.pow(1+r/100,t);
console.log("Amount : "+amt);
var ci = amt - p;
console.log("Compound Interest : "+ci);
