const accountId = 1234;
var accountName = "Abhi";
let accountEmail = "Abhi@gmail.com";
accounCity = "Delhi";
let accountDate;

// accountId = 2 //Not Allowed//

accounCity = "NCR"

/*
Prefer not use var 
Because of issue in block space and functional scope
*/

console.log(accountId);
console.table([accountId, accountName, accountEmail, accounCity, accountDate]);