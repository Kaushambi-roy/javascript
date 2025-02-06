let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString());

let myAnotherDate = new Date(2023, 0 , 24, 5, 3 ,2)
console.log(myAnotherDate.toLocaleString());

let myNewDate = new Date("01-24-2023")
console.log(myNewDate.toLocaleString());


//*********************************DATE-STAMPS*************/
console.log("*********************************DATE-STAMPS*************/");

let myTimestamp = Date.now()
console.log(myTimestamp);
console.log(myNewDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getHours());




newDate.toLocaleString('default' , {
    weekday: "long"
})