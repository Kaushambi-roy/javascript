// // array

// const myArr = [10 , 11 ,12 ,13 , 14, 15]  //one way to declare array

// console.log(myArr[1]);


// const myHeros = ['shaktiman', 'naagraj']

// const myArr2 = new Array(21,22,23,24)   //second way to declare array


// //Array methods

// myArr.push(16)  //pushes another element in myArr
// myArr.push(17)
// console.log(myArr);


// myArr.pop()    //pops the last elemet from the array
// console.log(myArr);

// myArr.unshift(9)  //pushes element in the first position
// console.log(myArr);


// myArr.shift()  //deletes the element which is in the first position of the array
// console.log(myArr);


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(16));


// const newArr = myArr.join()  //'join()'  coverts the array into string 
// console.log(newArr);
// console.log(typeof newArr);


// //slice - It does not change the original array it just prints the number of element in the range from the starting and one element before the ending range

// console.log("A" , myArr);
// const myNA1 = myArr.slice(1,3)
// console.log(myNA1);
// console.log("B" , myArr);



// //splice   - It actually changes the original array..it extracts the elements from the original array
// //Also it  prints the number of elem in the range from the starting to the end range
// console.log("A" , myArr);    
// const myNA2 = myArr.splice(1,3)
// console.log(myNA2);
// console.log("B" , myArr);


const marvel_heroes= ["thor" , "ironman", "spiderman"]
const dc_heroes = ["superman" , "flash", "batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);


// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);


const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log("H", all_new_heroes);

const another_array = [1, 2, 3, [4,5,6], 7, [8, 9, [10, 11]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("kaushambi"));
console.log(Array.isArray(another_array));

console.log(Array.from("kaushambi"));

console.log(Array.from( {name : "kaushambi"}));  //interesting video number 15

let score1 = 100
let score2 = 200
let score3 = 300 
console.log(Array.of(score1,score2,score3));
