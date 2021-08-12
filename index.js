// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");


// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Why did you build this project? What was your motivation?',
      name: 'describewhy',
    },
    {
      type: 'input',
      message: 'What problems does this project solve? What did you learn?',
      name: 'describewhat',
    },
    {
     type: 'input',
    message: 'what are the installation instructions?',
    name: 'installation',
      },
      {
        type: 'input',
        message: 'What are the instructions for usage?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Who were your contributors (n/a if none)?',
        name: 'contributors',
      },
      {
          //need to choose from list of licenses, not type it in
        type: 'input',
        message: 'What license would you like to add (https://choosealicense.com/)?',
        name: 'license',
      },
      {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
      },
  ])
  .then((data) => {
    const { name, location, bio, linkedin, github } = data;
    let htmlContent = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
      <style>
      html {
          color: indigo;
      }
      </style>
    </head>
    <body>
      <h1>My name is ${name}</h1>
      <h2>I live in ${location}</h2>
      <h3>You should know ${bio}</h3>
      <h4>My LinkedIn is ${linkedin}</h4>
      <h5>My GitHub is ${github}</h5>

    </body>
    </html>`
   
    const filename = path.join(__dirname,"html","index.html")

    fs.writeFile(filename, htmlContent, (err) =>
    err ? console.log(err) : console.log('Success!')
    )

  });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
