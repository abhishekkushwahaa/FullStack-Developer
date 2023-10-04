let score = "Abc123";
// console.log(typeof score); // string
// console.log(typeof (score)); // string

let scoreNumber = Number(score);
// console.log(typeof scoreNumber); // number
// console.log(scoreNumber);

// "123" => 123
// "Abc123" => NaN
// true => 1; false => 0

let isLoggedIn = 1
let booleanValue = Boolean(isLoggedIn);
// console.log(booleanValue); // true

// 1 => true; 0 => false
// "0" => true; "" => false
// " " => true; "abc" => true

// ***********************************Operations*************************************** //

let value = 1;
let negValue = -value;
// console.log(negValue);

console.log(3 - 2); 
console.log(3 + 2); 
console.log(3 * 2); 
console.log(3 / 2); 
console.log(3 % 2); 
console.log(3 ** 2); 
console.log(3 + 2 * 3); 

let str1 = "Hello"
let str2 = " Abhi"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log("1" + "2");
console.log("1" + 2 + "3");
console.log(1 + 2 + "3");

console.log(+true);
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);