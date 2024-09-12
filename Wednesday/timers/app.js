// console.log("beeachin");

//setTimeout() is a method
//we need two arguments: task and the time

// setTimeout(function () {
//   console.log("i repeat myself every second");
// }, 1000);

// function timeoutAction() {
//   console.log("hye im outside the time out method");
// }
// setTimeout(timeoutAction, 5000);

//setInterval() is also a method
//we need two arguments: task and the time in milliseconds

// setInterval(function () {
//   console.log("i repeat myself every 3 seconds");
// }, 3000);

//we can combine setInterval and setTimout to clearInterval()

// const myInterval = setInterval(function () {
//   console.log("i repeat my self every 3 seconds");
// }, 3000);

// function stopTheInterval() {
//   setTimeout(function () {
//     clearInterval(myInterval);
//   }, 10000);
// }

// stopTheInterval();

const h1 = document.getElementById("h1");
const button = document.getElementById("button");

button.addEventListener("click", function () {
  var showText = h1;
  showText.style.display = "block";
});

setTimeout(function () {
  h1.style.display = "none";
}, 5000);
