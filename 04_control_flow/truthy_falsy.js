const userEmail ="hkj@gmail.com"
if (userEmail) {
    console.log("got user email");
} else{
    console.log("dont have user email");
}

// falsy values - false , 0 , -0 , BigInt 0n, null, undefined, "" , NaN

//Truthy values :- 
// "0"  -----> 0 but in the form of string , 'false' ---> false but in string form, " " ----> empty string but consists of a space, [] ---> empty array, {} ----> empty object, function(){} ----> empty function



//To check for empty array
const userEmaill = []
if (userEmaill.length === 0){
    console.log("empty array");
    
}

//To check for empty object
const emptyObj ={}
if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
    
}

//Nullish COalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
console.log(val1);

let val2
val2 = null ?? 10 ?? 20
console.log(val2);



//Terniary operator
//condition ? true: false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

