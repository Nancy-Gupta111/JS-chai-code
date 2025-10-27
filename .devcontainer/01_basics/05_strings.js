const name = "nancy"
const repoCount = 50
//  console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String(`nancy-gupta-01`)

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.name.indexOf('t'))

const newString = gameName.substring(-8, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  nancy  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://nancy.com/about%20html"
console.log(url.replaceAll('%20', '_'))
console.log(url.includes('sundar'))//false




