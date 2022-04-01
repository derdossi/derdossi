let space = ' ' // an empty space string
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let age = 250
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

// String Concatenation - Connecting two or more strings together
let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName); // Asabeneh Yetayeh

// Concatenating using addition Operator

let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition

// Long Literal Strings - Use \ to indicate a String continues on to the next line

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)

// Escape Sequences in Strings

/* 
\n : new line
\t: tab, 8 spaces
\\: Back slash
\`: Single quote
\": Double quote
*/

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

/* Output in Console
I hope everyone is enjoying the 30 Days Of JavaScript challenge.
Do you ?
Days  Topics  Exercises
Day 1 3 5
Day 2 3 5
Day 3 3 5
Day 4 3 5
This is a backslash  symbol (\)
In every programming language it starts with "Hello, World!"
In every programming language it starts with 'Hello, World!'
The saying 'Seeing is Believing' isn't correct in 2020
*/

// Template Literals (Template Strings) - use `(Backtick). To inject data ${Data to be injected}

//Example
console.log(`The sum of 2 and 3 is 5`)
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting data into a string

// Example with Data from lines 1-9
let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` // I am Asabeneh Yetayeh. I am 250. I live in Finland.
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}` // I am Asabeneh Yetayeh. I live in Helsinki, Finland. I am a teacher. I teach JavaScript.

// Adding expressions - can be value or some operations (comparison, arithmetic operations, ternary operation)
// Example with data from line 72 and 73

console.log(`${a} is greater than ${b}: ${a > b}`) // 2 is greater than 3: false

// String Methods - Everything in JavaScript is an Object. String has many methods.
// 1. length: returns the number of characters in a string included empty space.
// Example
let js = `JavaScript`
console.log(js.length) // 10
console.log(firstName.length) // Data from line 2. 8