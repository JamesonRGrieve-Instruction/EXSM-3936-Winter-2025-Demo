// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  const person = data.results[0];
  output("Name: " + person.name.first + " " + person.name.last);
  output("Email: " + person.email);
  output("Phone: " + person.phone);
  output("Location: " + person.location.city + ", " + person.location.state + ", " + person.location.country);
}

