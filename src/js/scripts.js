const theNumber = document.getElementById("number");
const input = document.getElementById("input");
const submit = document.getElementById("submit");

if (localStorage.getItem("theNumber")) {
  theNumber.textContent = localStorage.getItem("theNumber");
} else {
  localStorage.setItem("theNumber", "0");
}

submit.addEventListener("click", () => {
  theNumber.textContent = Number(theNumber.textContent) + Number(input.value);
  localStorage.setItem("theNumber", theNumber.textContent);
});
