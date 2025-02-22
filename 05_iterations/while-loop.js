//while loop
console.log("/************ while loop*****************");
let index = 0
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index += 1
}

//array using while loop
console.log("/************ array using while loop*****************");

let myArray = [`flash`, `batman`,`superman`]
let arr = 0
while (arr<myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr = arr+1
}



console.log("/************do while *****************");

// do while loop

let score = 1

do {
   console.log(`score is ${score}`);
    score++
} while (score <= 10);