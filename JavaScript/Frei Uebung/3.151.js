var name = "globaler Name";
function getNameGlobal() {
  return this.name;
}
console.log(getNameGlobal()); // Ausgabe: globaler Name

const person = {
  name: "moritz",
  getName: getNameGlobal,
};

const artist = {
  name: "Kyuss",
  getName: getNameGlobal,
};
console.log(person.getName()); // Ausgabe: Moritz
console.log(artist.getName());
