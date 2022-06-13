function createUser(username, email, password) {
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
