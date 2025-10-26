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