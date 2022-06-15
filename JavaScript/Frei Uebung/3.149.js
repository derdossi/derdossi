const person = {
  name: "Max",
  getName: function () {
    return this.name;
  },
};

console.log(person.getName());
