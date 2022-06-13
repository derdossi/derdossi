function createUser(username, email, password = "Standard Password") {
  const user = {
    username: username,
    email: email,
    password: password,
  };
  return user;
}
const max = createUser(
  "Max Mustermann",
  "max.mustermann@example.com",
  "secret"
);
console.log(max.username);
console.log(max.email);
console.log(max.password);
const moritz = createUser("Moritz Mustermann", "moritz.mustermann@example.com");
console.log(moritz.username);
console.log(moritz.email);
console.log(moritz.password);
