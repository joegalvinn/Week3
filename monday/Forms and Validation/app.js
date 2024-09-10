console.log("test");

//we want to select our form
const form = document.querySelector("form");

//we are going to add an event listener to our form

//event handler
function handleSubmit(e) {
  //we need to prevent the default behaviour of the submit event! otherwise it puts all in the URL
  e.preventDefault();
  //when user submits we want it to go into storage - CREATE AN OBJECT TO STORE DATA FROM THE INPUT
  //we need the 'new' keyword to make sure we create am instance of our form object everytime a new user inserts data
  const formData = new FormData(form);
  console.log(formData); //new FormData function will funnel data from the form (thats ben made a function from the HTML in "const form = document.querySelector("form"); into a storage

  //where we are collecting our object template (fromData) and passing it into the syntax of a classic object
  const formValues = Object.fromEntries(formData);
  console.log(formValues);
}

//event listener
form.addEventListener("submit", handleSubmit);
