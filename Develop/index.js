// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter your project title.",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions for your project.",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter project's usage instructions.",
  },
  {
    type: "input",
    name: "contributions",
    message: "Enter project contribution guidelines.",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter test instructions for project.",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project.",
    choices: [
      "MIT",
      "GNU General Public License v3.0",
      "Apache 2.0",
      'BSD 2-Clause "Simplified"',
      'BSD 3-Clause "Revised',
      "Boost Software 1.0",
      "Creative Commons Zero v1.0 Universal",
    ],
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address.",
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
