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


const gameName2 = new String('K--007')
//String Slice (substring)

const newString = gameName2.substring(3,5) //Start value included ,End value is excluded
console.log(newString)

const anotherString = gameName2.slice(-6,5)
console.log(anotherString)


const madString = "                 kunal                          "
console.log(madString)
console.log(madString.trim()) //Removes starting and ending blank spaces

console.log(madString.replace("kunal", "kunal kashyap"))


//To replace this %20 in below url:
const url = "https://kunalkashy%20ap.com/"
console.log(url.replace("%20",""))

//To check whether the string have the given name
console.log(url.includes('kunal'))

//To split the string with some reference
console.log(url.split("kunal")) //RETURNS ARRAY by removing the given element/string


const surname = "Kashyap"
//Concatenation

const fullName =`${name} ${surname}`
console.log(fullName)