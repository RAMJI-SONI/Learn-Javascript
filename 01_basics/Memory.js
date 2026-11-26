// memory types => Stack and heap 
//In primitive types Stack is used
// In non primitive type Heap is use

//In stack memory we get a copy of variable we declared
//In heap memory we get refrence of original value

let myYoutubename = "Ramji_Verse"

let AnotherName = myYoutubename
AnotherName = "Chaicode"

console.log(AnotherName);
console.log(myYoutubename);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne 

userTwo.email = "Ramji@google.com"

console.log(userOne.email);
console.log(userTwo.email);

