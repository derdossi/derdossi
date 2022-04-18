/*
let grade = prompt("Enter your grade here")
if (grade >= 80) {
    console.log("you got an A!")
} else if (grade < 80, grade > 60) {
    console.log("You got a B!")
} else if (grade < 60, grade > 40) {
    console.log("you got an C")
} else if (grade < 40, grade >= 20) {
    console.log("You got a D")
} else {
    console.log("You Failed")
}
*/
let userInputMonth = prompt("Enter the current month")
let month = userInputMonth.toLowerCase()
switch (month) {
    case `january`:
    case `february`:
    case `december`:
        console.log("The Season is Winter!")
        break
    case `september`:
    case `november`:
    case `october`:
        console.log(`The Season is Autumn`)
        break
    case `march`:
    case `april`:
    case `may`:
        console.log("The Season is Spring")
        break
    case "june":
    case "july":
    case "august":
        console.log("The Season is Summer!")
        break
    default:
        console.log("This is not a month")
}