// for loop

for (let i = 0; i <= 10; i++) {
     const element = i;
     if (element == 5) {
        console.log("5 is a prime number");
     }
    console.log(element);
    
    
}

// nested for loop 
//printing of multiplication of numbers 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(`table of: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
       //console.log(`inner loop: ${j} and outer loop: ${i}`);
       console.log(i + `*` + j + `=` + i*j);
       
        
    }
    
}


//***for loop for array */
console.log("//************ new for loop for array****************");


let myArray = ["squid game", "stranger things", "ashram", "harry potter"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    
}

console.log("//************ new for loop with break and continue****************");
//break and continue
for (let i = 0; i <= 20; i++) {
    if(i == 5) {
        console.log("detected 5");
        break
    }
    console.log(`value of i is ${i}`);
  
}
for (let i = 0; i <= 20; i++) {
    if(i == 5) {
        console.log("detected 5");
        continue
    }
    console.log(`value of i is ${i}`);
  
}

