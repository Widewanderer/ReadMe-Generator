// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  { type: "input", name: "title", message: "Enter your project title." },
  {
    type: "input",
    name: "description",
    message: "Enter a description of your project.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    }
    console.log("file created");
  });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

inquirer.prompt(questions).then((answers) => {
  console.log(answers);
  const template = generateMarkdown(answers);
  console.log(template);
  writeToFile("README.md", template);
});
