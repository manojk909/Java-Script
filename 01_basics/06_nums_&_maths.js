const score = 999
// console.log(score);

const balance = new Number(500)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNum = 23.02544
// console.log(otherNum.toPrecision(4));

const hund = 1000000
// console.log(hund.toLocaleString('en-IN'));


//+++++++++++++++++++++MATHS+++++++++++++++++++++++.
//min, max, 
// console.log(Math);
// console.log(Math.abs(-54));
// console.log(Math.round(56.4));
// console.log(Math.ceil(4.1));  //lower val
// console.log(Math.floor(4.9));  // upper val]]\

//RANDOM...........
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1) + min));
