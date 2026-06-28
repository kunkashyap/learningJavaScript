const name = "Kunal"
const repoCount = 50

//Outdated
// console.log(name + " " + repoCount)

//String Interpolation
console.log(`Hi, My name is ${name} and my Github repos is around ${repoCount}`)


const gameName = new String('KunalKK') //Creates an Object
console.log(gameName)
//Index of a string
console.log(gameName[3])

//Methods For String

console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())


//To see which character is at the given index
console.log(gameName.charAt(3))

//To see index of the given Character
console.log(gameName.indexOf('t')) //=> Return -1 bcs 't' doesn't exist in gameName