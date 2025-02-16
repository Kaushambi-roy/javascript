//*********function -1 *************/

function sayMyName() {
    console.log("K");
    console.log("A");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("M");
    console.log("B");
    console.log("I");
}
sayMyName()


//*******function - 2**********/
//print the answer
function addTwoNumbers(num1, num2) {
    console.log(num1+num2);
    
}
addTwoNumbers(3,4)



//*******function- 3 ************/
// returning the answer
function addNumbers(num1, num2) {
    // let result = num1 + num2
    // return result
    return num1 + num2 
    console.log("kaushambi"); //function  doesnt allows to execute anything after the result statement inside itself
    
    
}
const result = addNumbers(3,5)
console.log("Result:" , result);


//**************** function - 4 ***********// 

function loginUserMesage(username) {     //function loginusermessage(username = "sam") ---> this will lead to never going into the if block as if the user passes a undefine value this "samm" will be become the default value and if a defined value is passed then it is simply overwritten 
    if (username === undefined){           //if(!username){  } --if block can also be written like this to denote undefined value has been passed
        console.log("please enter username");
        return  
    }
    return `${username} just logged in`
}
console.log(loginUserMesage("kaushambi"));


// ******* function 5 ********//

function calculateCartprice(...num1) {  //using the ... we spread the multiple valus passed in a form of array
    return num1
}
console.log(calculateCartprice(200, 400 , 300));


//******** function - 6  ******/
// taking "object" in the function

const user = {
    username: "kaushambi",
     age: 21
}
function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
}
handleObject(user)


///******** function - 7  ******/
// another wayto pass an "object" in the function

function handleObject2(anyobject) {
    console.log(`username is ${anyobject.username} and gender is ${anyobject.gender}`);
}
handleObject2({
    username: "kaushambi",
    gender: "f"
})

///******** function - 8 ******/
// arrays in function

const myNewArray = [200, 300, 400, 500, 600]

function returnSecondValue(getarray) {
    return getarray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 400, 500])); ///another way to add array
