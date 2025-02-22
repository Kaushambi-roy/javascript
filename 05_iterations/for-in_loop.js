//for in loop for object
console.log("************for in loop for object*********");

const myObject = {
    js: 'javascript',
    cpp: 'cpp',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
   // console.log(key);
   // console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


//for in loop for array
console.log("************for in loop for array*********");


const programming = ["js", "rb", "c++", "swift"]
for (const key in programming) {
console.log(programming[key]);
}



//for in loop for map
console.log("************for in loop for map*********");
const map = new Map()
map.set('IN', "India")
map.set('USA', "united states of america")
map.set('Fr', "france")
map.set('swiss', "switzerland")
map.set('IN', "India") // wont be displayed again
//console.log(map);
 for (const key in map) {
    console.log(key);
    
} // ----> map is not iterative 

