// Example of Comparing with primitive and non Primitive Data types
// Primitive 
let numOne = 3
let numTwo = 3

console.log(numOne == numTwo) // Comparing numOne and numTwo, true. Numbers

let js = "Javascript"
let py = "Python"

console.log(js == py) // Comparing js and py, false. Strings

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // Comparing lightOn with lightOff, false. Boolean

let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers) // false

let userOne = {
    name: 'Asabeneh',
    role: 'teaching',
    country: 'Finland'
}

let userTwo = {
    name: 'Asabeneh',
    role: 'teaching',
    country: 'Finland'
}

console.log(userOne == userTwo) // false