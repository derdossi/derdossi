// If
/* 
Syntax
if () {
    for truthy condition
}
*/
// Example :
let num = 3
if (num > 0) {
    console.log(`${num} is a positive number`)
}
/* If Else
Syntax
if (condition) {
    this for truthy condition
} else {
    for false condition
}
*/
// Example
let number = -3
if (number > 0) {
    console.log(`${number} is a positive number`)
} else {
    console.log(`${number} is a negative number`)
}
/* If Else if Else
Syntax
if (condition) {
    
} else if (condition) {
    
} else {
    
}
*/
// Example
let a = 0
if (a > 0) {
    console.log(`${a} is a positive number`)
} else if (a < 0) {
    console.log(`${a} is a negative number`)
} else if (a == 0) {
    console.log(`${a} is zero`)
} else {
    console.log(`${a} is not a number`)
}
/* Switch - alternative to if else if else else
Syntax
switch (caseValue) {
    case value:
        
        break;

    default:
        break;
}
*/
let weather = "cloudy"
switch (weather) {
    case `rainy`:
        console.log(`You need a rain coat.`)
        break;
    case `cloudy`:
        console.log(`It might get cold, you need a jacket.`)
        break
    case `sunny`:
        console.log(`Go out freely.`)
        break
    default:
        console.log(`No need for the rain coat.`)
}