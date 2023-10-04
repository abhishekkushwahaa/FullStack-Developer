const name = "Abhishek"
const repoCount = 10
// console.log(name + repoCount + " Value"); //It's Outdated
console.log(`${name} has ${repoCount} Github Repositories`); //It's Modern
// console.log(name + " has " + repoCount + " Github Repositories"); //It's Outdated

const gameName = new String("PUBG-BGMI")
console.log(gameName);
console.log(gameName[0]);
// console.log(gameName.length);
console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
console.log(gameName.indexOf("B"));
// console.log(gameName.indexOf("Z"));
console.log(gameName.slice(1, 3));
// console.log(gameName.slice(1));
console.log(gameName.slice(-1));
console.log(gameName.charAt(0));

const newString = gameName.substring(1, 5)
console.log(newString);

const newStringOne = "   Abhi  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.google.com"
// console.log(url.startsWith("https"));
// console.log(url.endsWith("com"));
// console.log(url.includes("google"));
console.log(url.replace("google", "meta"));

console.log(gameName.split("-"));