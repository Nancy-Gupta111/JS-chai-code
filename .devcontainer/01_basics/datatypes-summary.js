// primitive 

//7 types: string , number, boolean, null, undefined, symbol, bignit

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTem = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId);//false
// const bigNumber = 343423423422525532n

//reference (non primitive)
//array, objects, functions

const heros = ["shaktiman","doga"];
let myObj= { 
 name:"nancy" ,
 age:20,
}

const myfunction =function(){
    console.log("hello world")
}

console.log(typeof bigNumber)//undefined
console.log(typeof outsideTem)//obejct

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack (primitve), heap(non-primitive)

let myYoutubename  = "nancygupta"
let anotherName = myYoutubenameanothername = "chai$code"

console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email: "user@google.com",
    upi: "nancy@goodle.com"
}

let userTwo = userOne
userTwo.email = "nancy@google.com"

console.log(userOne.email);
console.log(userTwo.email);