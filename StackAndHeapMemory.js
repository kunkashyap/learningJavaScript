//Stack(Primitive) , Heap memory(Non-Primitive)

//Stack memory me variable ki copy milti hai
// Heap me original value ka reference milta hai

let myYoutubeName = "kunalkashyap2007"


let anotherName = myYoutubeName
anotherName = "walrusbutterscotch"
console.log(myYoutubeName)
console.log(anotherName)




let userOne = {
    email: "kk@2007.com",
    upi : "abc@xyz"
}


let userTwo = userOne;  //Same reference of userOne

userTwo.email= "kk@abc.com"
console.log(userOne.email)
console.log(userTwo.email)