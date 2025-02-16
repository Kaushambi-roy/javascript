const tinderuser = new Object()
tinderuser.id = "123abc"
tinderuser.name = "sammy"
tinderuser.isLoggedIn = false
console.log(tinderuser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullName:{
            firtstname:"hitesh",
            lastname: "choudhary"
        }
    }
}
console.log(regularUser.fullname.userfullName);


const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4: "B"}
// const obj3 = {obj1,obj2} //do not use this as this makes it a nested array type of
// const obj3 = Object.assign({}, obj1,obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "hhjgjg.gmailcom"
    },

    {
        id:2,
        email: "gjjfhfgmail.com"

    }
]

users[1].email

console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('id'));




const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
//****************DESTRUCTURING************///

const {courseInstructor: instructor} = course //to make the courseInstructor more easily acsesible 
console.log(instructor);

