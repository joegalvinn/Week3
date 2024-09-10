//NPM setup
//STEP 1: make our app able to install packages
//terminal: "npm init -y"

//STEP 2: Install any packages that you want! we get the install command from the document page
//npm install packageName

//STEP 3: add a script to our package.json
//add  "dev": "node app" to Scripts{} in the json file

//STEP 4: we need to ignore our node_modules folder because GitHub has limited space
//we will make a file called .gitignore and add any dolfers or files I don't want on GitHub

//STEP 5: we need to tell our package.json what version of JS we are going to use
//"type":"module"

import cowsay from "cowsay"; //ES6 syntax

console.log(
  cowsay.say({
    text: "I'm Mooooody",
    e: "xX",
    T: "U ",
  })
);

import chalk from "chalk";

console.log(chalk.black("Hello world!"));
const log = console.log;

log(
  chalk.green(
    "I am a green line " +
      chalk.blue.underline.bold("with a blue substring") +
      " that becomes green again!"
  )
);

log(`
  CPU: ${chalk.red("90%")}
  RAM: ${chalk.green("40%")}
  DISK: ${chalk.yellow("70%")}
  `);

log(
  chalk.bgMagenta("testing this one" + chalk.yellow.bold("and now this one"))
);
