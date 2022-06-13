function createUser(username, email, password) {
  password = password !== undefined ? password : "Standard Password";
  const user = {
    username: username,
    email: email,
    password: password,
  };
  return user;
}
const userData1 = ["Max Mustermann", "max.mustermann@example.com", "secret"];
const userData2 = [
  "Moritz Mustermann",
  "moritz.mustermann@example.com",
  "password",
];
const max = createUser(...userData1);
const moritz = createUser(...userData2);
console.log(moritz);
console.log(max);
