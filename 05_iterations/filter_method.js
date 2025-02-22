// // NOTE---->for-each doesnt returns any values in the following syntax

const colors = ["yellow", "blue", "green", "red", "pink","black"]
const values = colors.forEach( (val) => {
    //console.log(val);
    return val
})
console.log(values);

//filter METHOD
console.log("//*********** FILTER METHOD ************");


const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter( (num) => {
    return num + 4   //wherever a scope is opened which "{ }" it is required to use return statment
})
console.log(newNums);

//RETUN VALUE USING for-each 

console.log("/**********RETUN VALUE USING for-each ********");

const myNum2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const newNums2 = []
myNum2.forEach((num) => {
    if (num > 14){
        newNums2.push(num)
    }
});

console.log(newNums2);


//example 2 of filter
console.log("/***********example 2 of filter********8");


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


const userBooks = books.filter( (bk1) => bk1.genre === 'History')
console.log(userBooks);

//example 3
console.log("/**********example 3********");

const userBooks2 = books.filter( (bk2) => {return bk2.publish >= 2000})
console.log(userBooks2);

//example 4
console.log("********example 4********");

const userBooks3 = books.filter( (bk3) => {
    return bk3.publish >= 1995 && bk3.genre === "History"
} )

console.log(userBooks3);


