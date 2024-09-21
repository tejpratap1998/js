// primitive

// 7 type : string , number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false

const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


// reference (non primitive)
// Array , Objects, Functions

const heros = ["skhatimaan", "nagraj", "doga"];
let myObj = {
    name: "tej",
    age: 26,
}

 const myFunction = function() {
     console.log("hello world");
 }

 console.log(typeof heros);
