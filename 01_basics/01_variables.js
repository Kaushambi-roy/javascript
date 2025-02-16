const accountId = 144543      // constant variable is declared using the keyword "const" and it cannot be modified in further code
let accountemail = "kaushambiroy90@gmail.com"   // let keyword use to assign a space for the variable and can be modified in the further code
var accountpassword = "1234" //////same as let keyword
accountcity = "jaipur"   //js allows such declaration of variable without any keyword
let accounstate;  

// accountId = 2  //note allowed to rewrite a constant


/**
prefer not to use "var"
because of its issue in block scope and functional scope

*/

accountemail = "kaushambi.com"
 accountpassword = "90878"
accountcity = "kolkata"


console.log(accountId);
console.table([accountId,accountemail,accountpassword,accountcity,accounstate]);



