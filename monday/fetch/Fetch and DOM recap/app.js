console.log("Test");

//!FETCH START

//fetch data from API
async function getPosts() {
  //the url in my getch method comes from the API documentation
  //we need async and await, so the browser gives us data when its ready
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(response);
  //i need my data written in json
  const data = await response.json();
  console.log(data);

  //data wrangling happens here if neccessary

  //need to return data to make it available for other functions
  return data;
}

getPosts();

//!FETCH END

//I am going to make a function that creates  the DOM element where my data is going to appear
const postsContainer = document.getElementById("posts-container");

function createPosts(titleContent, bodyContent) {
  const title = document.createElement("h2");
  const body = document.createElement("p");

  title.textContent = titleContent;
  body.textContent = bodyContent;

  postsContainer.appendChild(title);
  postsContainer.appendChild(body);
}

//I am going to make a function that matches the fetch data with the dom elements I created

async function displayPosts() {
  const postsData = await getPosts();
  createPosts(postsData[0].title, postsData[0].body);

  //!OR
  //   postsData.forEach(function (posts))
  // createPosts (post.title, post.body)
}

displayPosts();
