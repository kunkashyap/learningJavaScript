/* Primitive

7 types: String, Number , Boolean ,null , undefined, Symbol(making a value
          unique) , BigInt(scientific value 10 to power >53)
 */


const score = 213
const scoreValue = 10020.2
const isLoggedIn  = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 102010202010390000n
console.log(bigNumber)


/* Reference (Non-Primitive)
Array , Objects, Functions
*/

const planets = ["Mars","Jupiter","Saturn","Venus"];


let myObj ={
    name : "Kunal",
    age: 19,
}

console.log(myObj)


const myFunction = function (){
    console.log("Hello World")
}

myFunction()
console.log(typeof myObj)