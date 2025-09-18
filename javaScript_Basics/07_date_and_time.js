// 06 # ||** Date and Time in JavaScript ||01/01/1970|| starting time

const myDate = new Date();
// console.log(myDate);
// console.log(typeof myDate);  // ** it is Object
// console.log(myDate.getTime());  // ** it is in milliseconds
// console.log(myDate.toDateString());  // it will remove some things
// console.log(myDate.toLocaleString());  // it will give date and time

let myCreatedDate = new Date(2028, 0, 22); // ** it will set date according to you
// console.log(myCreatedDate);

let myCreatedDate1 = new Date(2028, 0, 22, 13, 6);
// console.log(myCreatedDate1.toLocaleString()); //  ** it will give you date and time

let myCreatedDate3 = new Date("07-22-2001");
// console.log(myCreatedDate3.toLocaleString());  // ** mm/dd/yy

let myTimeStamp = Date.now();
// console.log(myTimeStamp);  // => 1758190512158 mini-seconds from 1/1/1970

// console.log(Math.floor(Date.now() / 1000)); // => 1758190833 it will give you seconds from 1970

let newDate1 = new Date();
console.log(newDate1);
console.log(newDate1.getDate());
console.log(newDate1.getMonth());
console.log(newDate1.getFullYear());
console.log(newDate1.getMinutes());
console.log(newDate1.getTime());
console.log(newDate1.getSeconds());

let date1 = newDate1.toLocaleString("default", {
  weekday: "long",
});
console.log(date1);