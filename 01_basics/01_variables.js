const accountId = 144552
let accountEmail = "mnjkh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let aa
/*
DO NOT USE VAR bcz of 
issue in block scope and functional scope problem {}
*/



// accountId = 2   NOT ALLOWED
accountEmail = "sdfg"
accountPassword = "hhhhh"
accountCity = "aaaaaaaa"

console.log(accountId);
console.log([accountEmail, accountId, accountPassword, accountCity, aa]);
