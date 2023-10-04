// Stack (Primitive) vs Heap (Reference or Non-Primitive) Memory

// Stack Memory - LIFO (Last In First Out)👋

let myName = "Shikha"
let myGf = myName
myGf = "Balji"
console.log(myName);
console.log(myGf);

let userOne = {
    email: "abhi@gmail.com",
    password: "143",
}
let userTwo = userOne
userTwo.email = "shikha@gmail.com"
console.log(userOne.email);
console.log(userTwo.email); 

// let userTwo = {
//     email: "shikha@gmail.com",
//     password: "1432",
// }