const max = {
  firstName: "Max",
  lastName: "Mustermann",
};
const numbers = [2, 4, 56, 22, 65, 2, 54, 88, 29];
function add(x, y) {
  return x + y;
}
console.log(max instanceof Object);
console.log(max instanceof Array);
console.log(numbers instanceof Array);
console.log(numbers instanceof Object);
console.log(add instanceof Function);
console.log(add instanceof Object);
