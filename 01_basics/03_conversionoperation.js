let score = "33"

console.log(typeof score);
console.log(typeof (score));

let valuenumber = Number(score)

console.log(typeof valuenumber);
console.log(valuenumber);

// "33" => 33
// "33abc" => NaN
// TRUE => 1
// FLASE=>0
//use boolean(var_name_to be converted) to convert in boolean
//use string(var_name_to be converted) to convert in string

//*************************************OPERATIONS************************************

let value = 3
let negvalue = -value
console.log(negvalue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%3);

let str1 = "hello"
let str2 = "kaushambi"
let str3 = str1 +str2
console.log(str3);


console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");


let x = 100
console.log(x++); //prints x first and then increments
console.log(x);  // prints the incremented value of the x
console.log(++x);  // first increments the value and then prints it
