// 1. Declare firstName, lastName, country, city, age, isMarried, 
// year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Boglárka"
let lastName = "Ördög"
let country = "Hungary"
let city = "Kunszállás"
let age = 20
let isMarried = false
let year = 2022

console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))
    // 2. Check if type of '10' is equal to 10
let number = 10
console.log(typeof(number) == 10)
    // 3. Check if parseInt('9.8') is equal to 10
console.log(parseInt(9.8) == 10)
    /* 4. Boolean value is either true or false.
    - Write three JavaScript statement which provide truthy value.
    - Write three JavaScript statement which provide falsy value.
    */
let yes = true
let yus = 6
let truth = "Hello"
let no = false
let nyo = 0
let boggi = undefined
    /* 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
    i. true
    ii. true
    iii. false
    iv. false
    v. true
    vi. true
    vii. false
    viii. false
    ix. true // wrong
    x. true
    xi. false
    */
console.log(4 > 3) // true
console.log(4 >= 3) // true
console.log(4 < 3) // false
console.log(4 <= 3) // false
console.log(4 == 4) // true
console.log(4 === 4) // true
console.log(4 != 4) // false
console.log(4 !== 4) // false
console.log(4 != "4") // false
console.log(4 == "4") // true
console.log(4 === "4") // false
let python = "python"
let jargon = "jargon"
console.log(python.length)
console.log(jargon.length)
console.log(jargon === python)
    /* 
     Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
     i. true
     ii. false
     iii. true
     iv. true
     v. false
     vi. true
     vii.true
     viii. false
     ix. true
     x. true
     */
console.log(4 > 3 && 10 < 12) // true
console.log(4 > 3 && 10 > 12) // false
console.log(4 > 3 || 10 < 12) // true
console.log(4 > 3 || 10 > 12) // true
console.log(!(4 > 3)) // false
console.log(!(4 < 3)) // true
console.log(!(false)) // true
console.log(!(4 > 3 && 10 < 12)) // false
console.log(!(4 > 3 && 10 > 12)) // true
console.log(!(4 === "4")) // true
let dragon = "dragon"
console.log(!(python.includes("on"))) // false
console.log(!(dragon.includes("on"))) // false
    /* 7.
    Use the Date object to do the following activities

    What is the year today?
    What is the month today as a number?
    What is the date today?
    What is the day today as a number?
    What is the hours now?
    What is the minutes now?
    Find out the numbers of seconds elapsed from January 1, 1970 to now.
    */
const now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())