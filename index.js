console.log("Kunal Kashyap");

//const -> Once declared, value cannot be changed (immutable)
//
// const number = 11;
/* console.log(number);  => This will throw an error because number is
already declared
 */




const accountId = 33545;
let accountEmail = "kunalkashyap@xyz.com";
var accountPassword = "12345678";
accountCity = "Delhi";

// accountId = 2; Throw an error
console.log(accountId);

accountEmail = "kashyap.kunal@xyz.com";
console.log(accountEmail);


accountPassword = "abc201010#$@";
console.log(accountPassword);

accountCity = "Mussorie";
//console.table => tabular form view
console.table([accountId, accountEmail, accountPassword, accountCity]);



