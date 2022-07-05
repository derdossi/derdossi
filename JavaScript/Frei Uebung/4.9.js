const array = [
  ["name", "Schrödinger programmiert Java"],
  ["price", "44.90"],
  ["author", "Philip Ackermann"],
  ["isbn", "978-3-8362-7272-8"],
  [
    "printDescription",
    function () {
      console.log(`${this.author}: ${this.name}`);
    },
  ],
];
const item = Object.fromEntries(array);
console.log(item.name);
console.log(item.price);
console.log(item.author);
console.log(item.isbn);
item.printDescription();
