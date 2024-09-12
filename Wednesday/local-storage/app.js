const importantData = {
  favFood: "cake",
  names: ["joe", "jess", "bear"],
};

const stringifiedData = JSON.stringify(importantData);
console.log(stringifiedData);

localStorage.setItem("importantData", stringifiedData);

const retrievedData = localStorage.getItem("importantData");
console.log(retrievedData);

const myOriginalData = JSON.parse(retrievedData);
console.log(myOriginalData);

// const form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const form = new FormData(form);
//   const color = FormData.length("color");
//   localStorage.setItem("color", color);
// });
