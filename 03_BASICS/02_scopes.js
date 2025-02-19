let a = 40 // global a

if (true) {
    let a = 10 // local a
    console.log("inner a: ", a);
    
    const b = 20 //declared locally using const cannot be used globally
    //var c = 30   //reason to not use var is that it lets the  variable to be used globaly even if declared locally
}
console.log(a);
//console.log(b);
//console.log(c);





function one() {
    const username = "kaushambi"

    function two() {
        const web = "youtube"
        console.log(username);
        
    }
    //console.log(web);

    two()
    
}
one()



if(true){
    const username = "miss roy"
    if (username === "miss roy"){
        const web = " youtube"
        console.log(username + web);
        
    }
    //console.log(web);
    
}
//console.log(username);



//**********INTERESTING EXAMPLE**********//
console.log("//****INTERESTING EXAMPLE OF DECLARING TYPES OF FUNCTIONS****//");

 
console.log(addOne(8));
 //------> IN THE BELOW TYPE OF DECLARTIONS OF THE FUNCTIONS WE CAN CALL THE FUNCTION BEFORE THE FUNCTION IS DECLARED IN THE CODE
function addOne(num) {
    return num + 1
}




//  addTwo(4)  ---> IN THIS TYPE OF DECLARATIONS OF THE FUNCTIONS WE CANNOT CALL THE FUNCTION BEFORE THE FUNCTION IS DECLARED 
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(9));
