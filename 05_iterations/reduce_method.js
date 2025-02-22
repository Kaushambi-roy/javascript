// BASIC  REDUCE METHOD 
console.log("*********REDUCE METHOD*****");

const myNums = [1,2,3]

const mytotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
    
} , 0) // the "0" given here is the initial value of the accumulator and can change according to choice

console.log(mytotal);


//REDUCE METHOD USING ARROW FUNCTION
console.log("**********//REDUCE METHOD USING ARROW FUNCTION**********");


const myNums2 = [1,2,3]
const mytotal2 = myNums2.reduce( (acc, currval) =>{ 
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval }, 0);



console.log(mytotal2);




//EXAMPLE OF A SHOPPING CART OF FINAL BILL
console.log("*******//EXAMPLE OF A SHOPPING CART OF FINAL BILL**********");

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price , 0)

console.log(`TOtal bill is:- ${priceToPay}`);
