/* In comments for less prompts - Works
let age = prompt("Enter your age")
let young = 18 - age
if (age > 18) {
    console.log("You are old enough to drive.")
} else {
    console.log(`You are left with ${18 - age} years to drive`)
}

let myAge = 25
let yourAge = prompt("Enter your age")
if (yourAge > myAge) {
    console.log(`You are ${yourAge - myAge} older than me.`)
} else {
    console.log(`You are ${myAge - yourAge} younger than me`)
}

let a = 4
let b = 3
if (a > b) {
    console.log(`${a} is greater than ${b}`)
} else {
    console.log(`${a} is smaller than ${b}`)
}
*/
let number = prompt("Enter a number")
if (number % 2 == 0) {
    console.log(`${number} is an even number.`)
} else {
    console.log(`${number} is an odd number`)
}