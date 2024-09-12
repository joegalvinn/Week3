console.log("Hello");

//intereact with the form
const form = document.querySelector("form");

console.log(form);

//to listen to the form event
function handleSubmit(event) {
  //stops data being sent to url
  event.preventDefault();
  //create an object placeholder using the form as reference
  const formData = new FormData(form);
  //here we are saving the inputdata with the name "colour"
  const colour = formData.get("colour");
  //we don't need to stringify the data here because we are already collecting a string value
  localStorage.setItem("colour", colour);
}

form.addEventListener("submit", handleSubmit);

const colour = localStorage.getItem("colour");
