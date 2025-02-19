//**************** THIS KEYWORD********/

const user = {
    username: "kaushambi",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} ,  welcome to the website`);
        //console.log(this);
        
        
    }
}
//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()

//console.log(this);


function chai() {
   console.log(this);
    
}
chai()


function chai2() {
    let username = "hitesh"
    console.log(this.username2);
     
 }
 chai2()


const chai3 = function () {
    let username3 = "kaushambi"
    console.log(this.username3);
    
}
chai3()



//************* Arrow function***********/
// const chai4 = () => {
//     let username4 = "kaushambi"
//     console.log(this.username4);
    
// }
// chai4()

//explicit arrow func

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,4));


//implicit arrow function

const addTwoNum = (num1,num2) => (num1 + num2)
console.log(addTwoNum(8,9));

const obj = () => ({user: "kaushambi"})
console.log(obj());
