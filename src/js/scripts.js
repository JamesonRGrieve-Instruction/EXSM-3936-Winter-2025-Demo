const target = document.querySelector("#output");

async function populateUser() {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  const person = data.results[0];
  const strings = ["Name: " + person.name.first + " " + person.name.last, "Email: " + person.email, "Phone: " + person.phone, "Location: " + person.location.city + ", " + person.location.state + ", " + person.location.country];
  for (const string of strings) {
    const listItem = document.createElement("li");
    listItem.innerText = string;
    target.appendChild(listItem);
  }
}

populateUser();