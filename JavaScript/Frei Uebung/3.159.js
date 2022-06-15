const userInput = prompt(`bitte die länge des Array eingeben`);
const length = parseInt(userInput);
let array;
try {
  array = createArray(lengths);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}
function createArray(length) {
  return new Array(length);
}
