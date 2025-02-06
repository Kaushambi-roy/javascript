//primitive data types 
//7 types of primitive data types -: string , number , boolean , null,  undefined , symbol , BigInt


const score  = 100 //number
const scoreValue = 100.3 //number
name = "kaushambi"  //string
const isLoggedIn = false //boolean
const outsideTemp = null //null
let userEmail; //undefined
const id = Symbol('123')  // symbol
const anotherid = Symbol('123')  //symbol

console.log(id == anotherid);

const BigNumber = 376239187917861893710n  //bigint
console.log(typeof BigNumber);  


// Reference (NON PRIMITIVE) Data types
// types - Array, objects , functions 

const heros = ["shaktiman" , "nagraj", "doga"]; //array
 //objects as follows
let myObj = {
    name: "hitesh",
    age: 22,
}

//function as follows

const myFunction = function(){
    console.log("hello world"); 
}


//*****************************************************//
//two types of memory as follows
//stack memory  (used in primitive data type)
//heap memory (used in non primitive data type)



// stack memory example where only the copy is passed to the another variable and changes made in another variable doesnt effects the original variable
let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiorcode"

console.log(anothername);
console.log(myYoutubename);

//heap memory example where the reference of the original is passed to another function and changes made also affects the original data whose reference is passed

let userOne = {
    email: "example.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "yahoo.com" 

console.log(userOne.email);
console.log(userTwo.email);

