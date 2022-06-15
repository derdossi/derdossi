console.log(checkage(22));
try {
  console.log(checkage("Max Mustermann"));
} catch (error) {
  console.log(error);
}
try {
  console.log(checkage(-22));
} catch (error) {
  console.log(error);
}
console.log(checkage("Max Mustermann"));
function checkage(age) {
  if (isNaN(parseFloat(age))) {
    throw new TypeError("Alter muss eine Zahl sein");
  } else if (age < 0) {
    throw new RangeError("Alter darf nicht negativ sein");
  }
  return true;
}
try {
  console.log(checkAge("Max Mustermann"));
} catch (error) {
  console.log(error);
}
