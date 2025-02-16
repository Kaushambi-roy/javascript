
//object literals

const mysym = Symbol("key1")


const JsUser = {
    name: "kaushambi",
    "full name": "kaushambi roy", //to print this we can never use the . method like "jsuser.full name"
    [mysym]: "mykey1",
    age: 20,
    location: "kolkata",
    email: "kaushambiroy90@gmail.com",
    isloggenIn: false,
    lastLoginDays: ["monday", "saturday"]
 }

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(typeof JsUser[mysym]);

JsUser.email = "kaushambiroypretty.com"  //to make changes in the object
//Object.freeze(JsUser) //to freeze or to make the object unchangeble 
JsUser.email = "kaushambisuman.com"
console.log(JsUser);



JsUser.greeting = function(){
    console.log("hello js user");
}
console.log(JsUser.greeting());


JsUser.greetingtwo = function(){
    console.log(`hello js user,${this.name}`);
}
console.log(JsUser.greetingtwo());
