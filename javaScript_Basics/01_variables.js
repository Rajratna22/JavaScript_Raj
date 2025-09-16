const accountId = 144334;      // can't change 
let accountEmail = "raj123@gmail.com"    // can change
var accountPassword = "12345"          // globel variable
accountCity = "Mumbai"             // you can also reserve variable memory without declaring it . 

let accountState;        // this will show undefined in terminal

// accountId = 2 // this is not allowed

console.log(accountId);

accountEmail = "qwer123@gmail.com"

accountPassword = "010203"

accountCity = "Delhi";


// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

// better way 

console.table([accountEmail,accountPassword,accountCity,accountState])