const theNumbers = document.querySelectorAll(".number");
const inputs = document.querySelectorAll(".input");
const submits = document.querySelectorAll(".submit");
const clears = document.querySelectorAll(".clear");

for (let i = 0; i < theNumbers.length; i++) {
  if (localStorage.getItem("theNumber" + i)) {
    theNumbers[i].textContent = localStorage.getItem("theNumber" + i);
  } else {
    localStorage.setItem("theNumber" + i, "0");
  }
  submits[i].addEventListener("click", () => {
    theNumbers[i].textContent = Number(theNumbers[i].textContent) + Number(inputs[i].value);
    localStorage.setItem("theNumber" + i, theNumbers[i].textContent);
  });
  clears[i].addEventListener("click", () => {
    theNumbers[i].textContent = "0";
    localStorage.setItem("theNumber" + i, "0");
  });
}
