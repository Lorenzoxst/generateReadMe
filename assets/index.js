// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require('path');
// TODO: Create an array of questions for user input
const questions =  [
    {
        message: "What Would you like to name the README file?",
        type: "input",
        name: "title"
    },
    {
        message: "Please provide a description for your project.",
        type: "editor",
        name: "description"
    },
    {
        message: "Would you like to include a Table of contents?",
        type: "confirm",
        name: "toc"
    },
    {
        message: "How would you like users to install your application?",
        type: "input",
        name: "install"
    },
    {
        message: "Please include your usage information",
        type: "input",
        name: "usage"
    },
    {
        message: "What license is this project using?",
        type: "list",
        choices: ["Apache License 2.0", "GNU GPLv3", "MIT License", "The Unlicense", "None"],
        name: "license"
    },
    {
        message: "What are your contribution guidelines?",
        type: "input",
        name: "contribution"
    },
    {
        message: "What are your test instructions?",
        type: "input",
        name: "test"
    },
    {
        message: "What is your GitHub username?",
        type: "input",
        name: "github"
    },
    {
        message: "What is the email address you would like to include for inquiries?",
        type: "input",
        name: "email"
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            console.log("Creating ReadMe...");
        writeToFile("README.md", generateMarkdown( {...data } ) )
        })
    }

// Function call to initialize app
init();
