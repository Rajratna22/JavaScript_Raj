// string in javascript

const name = "raj"
const repoCount = 5

// console.log(name + repoCount + "value")   not recomended

//console.log(`Hello my is ${name} and my repo count is ${repoCount}`);

const gameName = new String('rajratna')
console.log(gameName);

// console.log(gameName[0]);  // => r
// console.log(gameName._proto_);  

// console.log(gameName.length);  // => 8
// console.log(gameName.toUpperCase);  // =>  
// console.log(gameName.toLowerCase);
// console.log(gameName.charAt(1));  //=> a
// console.log(gameName.indexOf('j'));  //=> 2

// ** substring : gives you cuted string
const newString = gameName.substring(0, 4);
 // console.log(newString);  

// ** slice : slice the string
const anotherName = gameName.slice(3, 8);
// console.log(anotherName); //you can give -ve value to slice it will start from backwards

// ** trim : //*  it will trim(remove) all whitespaces
const newString1 = "   kamble    ";
// console.log(newString1);
// console.log(newString1.trim()); 

// ** replace and include : it replace string or charactor with other str. or char.
// ** include checks if the string is present or not in given element
const url = "https://rajratna.com/raj%20kamble";
// console.log(url);
// console.log(url.replace("%20", "-"));
// console.log(url.includes("raj")); // => true

// ** split  => it will split on the basis of given value
const gameName2 = new String("rajratna-gk-com");
console.log(gameName2.split("-"));