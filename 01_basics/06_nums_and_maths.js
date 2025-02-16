const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const anothernumber = 123.8966
console.log(anothernumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));




//*****************maths**************//

console.log("//******************maths****************//")


console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(2.5));
console.log(Math.min(2,3,4,5,1,0));
console.log(Math.max(2,8,9,10,34));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min);
