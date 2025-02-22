//******for-each loop for array*****
console.log("******for each loop for array using function*****");

//for-each loop for array using function
const coding = ["js", "ruby", "cpp", "py", "java","swift" ]
coding.forEach(  function (item) {
    console.log(item);  
})

//for-each loop for array using arrow function
console.log("******for each loop for array using arrow function*****");

const colors = ["yellow", "blue", "green", "red", "pink","black"]
colors.forEach( (val) => {
    console.log(val);
})


//for-each loop for array using printme function
console.log("******for each loop for array using printme function*****");

const heroes = ["sreejit", "swastik", "reek", "pritam", "tushar"]
function printMe(values) {
   console.log(values);
}
heroes.forEach(printMe)


//for-each loop for array to print -item, index, arraylist
console.log("******for-each loop for array to print -item, index, arraylist*****");

const programming = ["javascript", "c++", "python", "c" ]
programming.forEach( (item, index, arr) => {
    console.log(item,index,arr);  
})


//for-each loop for array containing an object
console.log("******for-each loop for array containing an object*****");

const mycoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },

    {
        languageName: "java",
        languageFileName: "java"
    },

    {
        languageName: "python",
        languageFileName: "py"
    }
]
mycoding.forEach( (lang) => {
    console.log(`${lang.languageFileName} is the language name for the shorthand ${lang.languageName}`);
    
})
 