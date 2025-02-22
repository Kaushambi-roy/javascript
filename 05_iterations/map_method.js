//MAP  METHOD
console.log("*********basic of MAP  METHOD*********")

const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNumbers.map( (num) => {return num + 10} )
console.log(newNums);

//chaining of map()
console.log("******chaining of map()*******");


const myNumbers2 = [1,2,3,4,5,6,7,8,9,10]
const newNums2 = myNumbers2
                             .map( (num) => num * 10 )
                             .map( (num) => num +1)
                             .filter( (num) => num >= 40)
console.log(newNums2);


