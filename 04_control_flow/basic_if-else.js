//if
const isuserloggedin = true
if(2!=3){
    console.log("executed");
}

//if-else
const temp = 41
if (temp === 40) {
    console.log("temp below 50");
    
}
else{
    console.log("temp is above 50");
    
}
console.log("executed");   //outside the if-else block will definately be executed


//var-let
const score = 200
if(score > 100){
   //  var power = "fly"  //'var' lets the variable be used outside the block scope which is not suitable to use  let or const
    let power = "fly"
    console.log(`user power: ${power}`);
}

//console.log(`user power: ${power}`);


//short-hand notation

const balance = 700
// if (balance > 50) console.log("test"),console.log("passed");  //absolutely should not be used as it is not readable

if (balance < 500){
    console.log("less than 500");
}
else if (balance < 750){
    console.log("less than 750");
}
else if(balance < 900){
    console.log("less than 900");
}
else{
    console.log("less than 1200");
    
}

const userLoggedIn = true
const deditCard = true
const userLoggedInfromGoogle = false
const userLoggedInfromEmail = true

if (userLoggedIn && deditCard){
    console.log("allow to buy");
}
 if (userLoggedInfromGoogle || userLoggedInfromEmail) {
    console.log("user logged in");
}



