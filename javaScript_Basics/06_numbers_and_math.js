// 06 #||** Numbers and Maths in JavaScript **||
// #||** Numbers **||:
const score = 92;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// ** toString
// console.log(balance.toString()); // * it become string and now we can use string methods on it.

// ** toFixed
// console.log(balance.toFixed(2)); // * it will give a precision value
const numb = 200.456789;
// console.log(numb.toFixed(4)); // and also it will give you after point value that you want

// ** toPrecision
const otherNumb = 50.123456;
// console.log(otherNumb.toPrecision(3));

// ** toLocalString => it gives value according to us standers but you can use en-IN to convert
const hundreds = 10000000;
// console.log(hundreds.toLocaleString("en-IN"));

// **********************************************************************************//

// #||** Maths **||:  => it is a object that contains various methods
// console.log(Math);

// ** .abs : it gives you positive value
// console.log(Math.abs(-5)); //=> 5

// ** .round : it will round off number based on which is more or less than 5
// console.log(Math.round(5.5)); // =>6

// ** .floor : it will round off number in less value
// console.log(Math.floor(5.5)); // => 5

// ** .ceil : it will round off number in more value
// console.log(Math.ceil(5.5)); // =>6

// ** .min : it will give you min value in array
// console.log(Math.min(5, 74, 84, 67, 25)); // =>5

// ** .max : it will give you max value in array
// console.log(Math.max(5, 74, 84, 67, 25)); // =>84

// ** Math.random() : it will give you you a random number from 0 to 1 but not 1
// console.log(Math.random());
// console.log(Math.random() * 10); //=> it will give from 0 to 9 random value
// console.log(Math.random() * 10 + 1); //=> now it will give from 1 to 10 random value
// console.log(Math.floor(Math.random() * 10) + 1); //=> without point and min val
// ** if you want a start and end range
const min = 10;
const max = 20;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);