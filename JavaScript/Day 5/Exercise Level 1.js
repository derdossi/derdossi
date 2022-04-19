/* console cleaning
const empty = []
const moreThanFive = [1, 2, 3, 4, 5, 6, 7]
console.log(moreThanFive.length)
let firstNumber = moreThanFive[0]
console.log(firstNumber)
let middleNumber = moreThanFive[3]
console.log(middleNumber)
let lastNumber = moreThanFive[6]
console.log(lastNumber)
const mixedDataTypes = [5, "Twenty one", true, 250, "Four", false, 2]
console.log(mixedDataTypes.length)
*/
const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]
console.log(itCompanies);
console.log(itCompanies.length);
let itCompaniesFirst = itCompanies[0]
console.log(itCompaniesFirst)
let itCompaniesMiddle = itCompanies[3]
console.log(itCompaniesMiddle)
let itCompaniesEnd = itCompanies[6]
console.log(itCompaniesEnd)
let itCompaniesSecond = itCompanies[1]
console.log(itCompaniesSecond)
let itCompaniesThird = itCompanies[2]
console.log(itCompaniesThird)
let itCompaniesFifth = itCompanies[4]
console.log(itCompaniesFifth)
let itCompaniesSixth = itCompanies[5]
console.log(itCompaniesSixth)
let itCompaniesFirstLower = itCompaniesFirst.toLowerCase()
let itCompaniesSecondLower = itCompaniesSecond.toLowerCase()
let itCompaniesThirdLower = itCompaniesThird.toLowerCase()
let itCompaniesMiddleLower = itCompaniesMiddle.toLowerCase()
let itCompaniesFifthLower = itCompaniesFifth.toLowerCase()
let itCompaniesSixthLower = itCompaniesSixth.toLowerCase()
let itCompaniesEndLower = itCompaniesEnd.toLowerCase()
console.log(itCompaniesFirstLower)
console.log(itCompaniesSecondLower)
console.log(itCompaniesThirdLower)
console.log(itCompaniesMiddleLower)
console.log(itCompaniesFifthLower)
console.log(itCompaniesSixthLower)
console.log(itCompaniesEndLower)
console.log(`${itCompanies} are big IT companies. `)
let index = itCompanies.indexOf("Facebook")

if (index === 0) {
    console.log("This Company exists in the Array")
} else {
    console.log("This Company does not exist in the Array")
}
console.log(itCompanies.sort())
console.log(itCompanies.reverse())
console.log(itCompanies.slice(0, 3))
console.log(itCompanies.slice(4, 7))
console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), 1))