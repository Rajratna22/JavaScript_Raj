// ** DataTypes Summery

// # Primitive Datatypes 
// * string 
let str = "this is string"

// * number
let score = 100

// * bollean
let isLoggedIn = true

// * null
let ousideTemp = null

// * undefined
let userEmail ;

// * symbol
const id = Symbol("123")
const anotherId = Symbol("123")
//console.log(id === anotherId); // false

// * bigint
const bigNumb = 3281446416168n
//console.log(bigNumb);


// # Non-Premetive / Refrence Type Datatype
// * array
const heros = ["Thor","Hulk","BatMan"]
const numb = [1,2,3,4,5,6]

// * objects
const  info ={
    name:"raj",
    age:23,
    isStudent:false,
    work:function(){
        console.log("Not Working")
    },
    address:"154 yfuyw0000"
}
// console.log(info.work);

// * functions
function myName (){
console.log("My Name is Raj")
}
// myName();

// another way
const myFunction =function  (){
    console.log("Hello World")
}
// myFunction()