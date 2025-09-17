// string in javascript

const name = "raj"
const repoCount = 5

// console.log(name + repoCount + "value")   not recomended

//console.log(`Hello my is ${name} and my repo count is ${repoCount}`);

const gameName = new String('rajratna')
console.log(gameName);

console.log(gameName[0]);  // => r
console.log(gameName._proto_);  

console.log(gameName.length);  // => 8
console.log(gameName.toUpperCase);  // =>  
console.log(gameName.toLowerCase);
console.log(gameName.charAt(1));  //=> a
console.log(gameName.indexOf('j'));  //=> 2
