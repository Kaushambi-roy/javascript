
//["" , "", ""] --> array with string
//[{}, {}, {}] ---> array with objects

//for of loop
console.log("**************for of loop on an array********");

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
    
}


console.log("**************for of loop on an string********");
const greetings = "hello world"
for (const greet of greetings) {
    if(greet == " ") {
        console.log("next word");
        continue
    }
    console.log(`Each char is ${greet}`); 
}


//Maps ----> basic key-value pairs , doesnt allows duplicate values
console.log("************** maps ********");
const map = new Map()
map.set('IN', "India")
map.set('USA', "united states of america")
map.set('Fr', "france")
map.set('swiss', "switzerland")
map.set('IN', "India") // wont be displayed again
console.log(map);


// for of loop on map
for (const [key, value]of map) {
    console.log(key, ':-' , value);
}


//******************for of loop on object containing maps*/
// console.log("//************for of loop on object  containing maps***********/");

// const myObject = {
//     'game1': 'nfs',
//     "game2": "pubg"
// }
// for (const [key,value] of myObject) {
//     console.log(key, ':-' , value);
    
// }----> for of loop doesnt works for object