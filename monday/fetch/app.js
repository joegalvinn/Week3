console.log("foxes?");

//step 1: get data from API

//the async / awit keywords are used so our getFoxes() function returns the actual data from the fetch request, instead of giving us an immediate promise
//our code usually runs synchronously with our browser; our getFoxes() function runs at the pace of the fetch request
async function getFoxes() {
  //we use fetch to get the data from the API
  //we need to write the url we want the data from
  const response = await fetch("https://randomfox.ca/floof");
  console.log(response);
  //we need to translate our response from the fetch into JSON, so we can manipulate the data
  //we need to await here too
  const data = await response.json();
  console.log(data);

  //we need to filter the data to just get the image propery
  //we call this data wrangling
  const wrangleData = data.image;
  console.log(wrangleData);

  //I need to use this value in the createFoxes function
  return wrangleData;
}

//step 2: recap of DOM manipulation
//going to create a function that matches the API data to an image element

//the foxContainer will store my fox images
const foxContainer = document.getElementById("fox-container"); //connecting js to html

function createFoxes(foxUrl) {
  const foxImage = document.createElement("img");

  foxImage.src = foxUrl;
  foxImage.alt = "Picture of a fox.";

  foxContainer.appendChild(foxImage);
}

//step 3: we need a function to call getFoxes() and createFoxes()
async function addFoxesToThePage() {
  const getFoxesData = await getFoxes();
  createFoxes(getFoxesData);
}
addFoxesToThePage();

//mine
const getItem = document.getElementById("get-item");

async function getMyStuffFromOverThere() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log("http Response:", response);
  const json = await response.json();
  console.log("JSON Data:", json);

  const wrangleData2 = json.image;
  console.log(wrangleData2);
  return wrangleData2;
}

getMyStuffFromOverThere();

//git api request

async function getGit() {
  const responding = await fetch(
    "https://api.github.com/repos/joegalvinn/week-2-project"
  );
  console.log("Http Response:", responding);
  const json1 = await responding.json();
  console.log("JSON Data", json1);

  const wrangleData3 = json1.image;
  console.log(wrangleData3);
  return wrangleData3;
}

getGit();
