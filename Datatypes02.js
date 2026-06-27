let score = false
console.log(typeof score);


//Type-Casting (conversion of data-types)
let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber)

//Notes
/*
"33" => 33
"33abc" => NaN (not a number) typeof NaN is number
true => 1; false => 0
 */
console.log("*****************")
let isloggedIn = "kunal"
let booleanisLoggedIn = Boolean(isloggedIn)

console.log(typeof isloggedIn);
console.log(booleanisLoggedIn)
console.log(typeof booleanisLoggedIn);

// 1 => true ; 0 => false
// "" (empty string ) => false
// "kunal" => true

console.log("*****************")


let someNumber = 7
let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber)





//***************** OPERATIONS *********************
console.log("***************** OPERATIONS *********************")

//Why String to Number conversion is confusing ?


let value = 3
let negValue = -value
console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2%4)

let str1 = "hello"
let str2 = " kunal"

let str3 = str1 + str2
console.log(str3)

//Why String to Number conversion is confusing ?
console.log("1"+2) //=> 12
console.log(2+"1") //=> 21
console.log("1"+ 2 + 2) //=> 122
console.log(1+2+"2") //=> 32