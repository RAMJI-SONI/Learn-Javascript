//let score = "33abc"
//let score = null
//let score = undefined
//let score = true 
//let score = false
let score = "34Ramji"

console.log(typeof score);
console.log(typeof (score));

let valueInnumber = Number(score)
console.log(typeof valueInnumber);
console.log( valueInnumber);

//NaN = No a number
//In case of string(of Characters)  -> number is NaN
//In case of string(of number)  -> number is that number
//In case of string(character +number)  -> number is NaN

//In case of null -> number is 0
//In case of undefined -> number is NaN
//In case of Boolean(true)  -> number is 1
//In case of Boolean(false)  -> number is 0


//Uses Boolean for conversion of number in boolean

//let isloggedin = "" //empty string is false in boolean 
//let isloggedin = 1 // any number other than 0 is true in boolean
//let isloggedin = 0 // false in boolean
let isloggedin = "Ramji" //Boolean is true 

let booleanIsLoggedIn = Boolean(isloggedin)
console.log(booleanIsLoggedIn);

//Number or any to string
let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

