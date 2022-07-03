const item = {
  name: `Schrödinger programmiert Java`,
  price: 44.9,
  author: "Philip Ackermann",
  isbn: "978-3-9362-7272-8",
  printDescription: function () {
    console.log(`${this.author}: ${this.name}`);
  },
};
console.log(item.name);
console.log(item.price);
console.log(item.author);
console.log(item.isbn);
item.printDescription();
