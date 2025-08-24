const accountId = 123678
let accountEmail = "prayushtamang@gmail.com"
var accountPassword = "12345"
accountCity = "GTA vicecity"
let accountState;

// accountId = 2 // not allowed

accountEmail = "pt@pt.com"
accountPassword = "12121212"
accountCity = "Liberty city"





console.log(accountId);

/*
prefer not to use var because of issue in block scope and functional scope 
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
