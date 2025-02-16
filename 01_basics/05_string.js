const name = "kaushambi"
const repoCount = 10

//console.log(name + repoCount + "value");    //do not use this (inappropriate)

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const nickname = new String('dimpys-hn-com')  //another way to declare strings

console.log(nickname[0]);
console.log(nickname.__proto__);
console.log(nickname.length);
console.log(nickname.toUpperCase());
console.log(nickname.charAt(2));
console.log(nickname.indexOf('y'));
console.log(nickname.split('-'));

const newString = nickname.substring(0, 2)
console.log(newString);

const anotherString = nickname.slice(-8, 4)
console.log(anotherString);

const anothername = "     babita     "
console.log(anothername);
console.log(anothername.trim());

const url = "https://kaushambi.com/kaushambi%20roy"

console.log(url.replace('%20', '-'));
console.log(url.includes('dimpy'));
