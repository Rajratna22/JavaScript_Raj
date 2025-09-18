// #||** Array in JavaSCript ||

// ** array declaration
const myArray = [0, 1, 2, 3, 4, 5];
// console.log(myArray);
// console.log(myArray[3]);

const myHeroes = ["Thor", "Hulk", "Batman"];
// console.log(myHeroes);
// console.log(myHeroes[1]);

const myArray1 = new Array(1, 2, "Thor", 3, "Hulk", "Batman");
// console.log(myArray1);
// console.log(myArray1[2]);

// #** array methods
// ** push  // add to ending of the array
const myArray2 = [1, 2, 3, 4, 5];
myArray2.push(6);
// console.log(myArray2);

myArray2.push(7);
// console.log(myArray2);

// ** pop   // remove from  end of the array
myArray2.pop();
// console.log(myArray2);

// ** unshift  // add to beginning of the array
myArray2.unshift(0);
// console.log(myArray2);

// ** shift   // remove from  beginning of the array
myArray2.shift();
// console.log(myArray2);

// ** include , indexof
// console.log(myArray2.includes(7)); // => false

// console.log(myArray2.indexOf(7)); // => -1
// console.log(myArray2.indexOf(5)); // => 4

// **  join : //it will convert join two array and convert into string
const newArray = myArray2.join();
// console.log(newArray);

// ** slice // ** it will slice the given index number
const myArray0 = [0, 1, 2, 3, 4, 5];

// console.log("A", myArray0);

const myn1 = myArray0.slice(1, 3);
// console.log(myn1);

// console.log("A", myArray0);

// ** splice // ** it will slice the given index number // ** it will also make changes in original array
// console.log("C", myArray0);

const myn2 = myArray0.splice(1, 3);
// console.log(myn2);

// console.log("C", myArray0);