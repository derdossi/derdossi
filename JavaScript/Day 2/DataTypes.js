/* Primitive Data Types - CANNOT BE MODIFIED, are comparable by ==
1. Numbers - Integers, float
2. Strings - Any data under single quote, double quote or backtick quote
3. Booleans - True or false
4. Null - empty value
5. Undefined
Example of non-modifiable Primitive Data type
*/
let word = "javascript"
word[0] = 'Y'
console.log(word)
    /*
    NEW!!!
    Non-Primitive data types are non comparable but modifiable
    1. Objects
    2. Functions+
    3. Arrays
    */

let nums = [1, 2, 3] // Array referenced by their index. Array index starts at 0
nums[0] = 10

console.log(nums) //[10, 2, 3]