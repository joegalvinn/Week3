//NPM setup
//STEP 1: make our app able to install packages
//terminal: "npm init -y"

//STEP 2: Install any packages that you want! we get the install command from the document page
//npm install packageName

//STEP 3: add a script to our package.json
//add  "dev": "node app" to Scripts{} in hte json file

//STEP 4: we need to ignore our node_modulesfolder because GitHub has limited space
//we will ake a file called .gitignore and add any dolfers or files I don't want on GitHub

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U ",
  })
);
