// # Stack And Heap Memory in JavaScript

// * stack{ premetive dataTypes}   =>it gives you a copy of that element // *changes will not happen in original element  

let myName = "rajkamble"
let anotherName = myName;
anotherName = "albert"
console.log(myName)    
console.log(anotherName);

// * heap { Non-premetive datatype}  => it gives you the refrence of that element // changes happens in original element 

let userone ={
    name:"raj",
    email:"abc123@gmail.com"
}
console.log(userone)
let usertwo = userone
userone.name ="sandy"

console.log(userone)
console.log(usertwo);
