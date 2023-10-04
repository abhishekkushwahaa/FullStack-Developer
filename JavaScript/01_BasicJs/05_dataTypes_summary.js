// Primitive types 👇
// 7 types of data types: String, Number, Boolean, Undefined, Null, Symbol, BigInt
const score = 100;
console.log(score);

const isLogged = false
console.log(isLogged);

const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);


// Reference (Non-Primitive) types 👇
// 3 types: Objects, Array, Functions
const user = ["Shikha", "Balji", "BG&GF"];
let myObj = {
    name: "Shikha",
    age : 21,
}

const myFunction = function(){
    console.log("This is my function");
}
console.log(typeof myFunction);
console.log(typeof score);
console.log(typeof null);