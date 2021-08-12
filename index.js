// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");


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
    const { title, describewhat, describewhy, installation, usage, contributors, license, github, email } = data;
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
      <h1># ${title}</h1>
      <p>add license badge here ${license}</p>
      <h2>##Description</h2>
      <p>${describewhy}</p>
      <p>${describewhat}</p>
      <h3##>Table of Contents</h3>
      <li><a href="#installation">Installation</a></li>
      <li><a href="#usage">Usage</a></li>
      <li><a href="#contributors">Contributors</a></li>
      <li><a href="#license">License</a></li>
      <li><a href="#questions">Questions</a></li>


      <h3 id="installation">##Installation</h3>
      <p>${installation}</p>
      <h3 id="usage">##Usage</h3>
      <p>${usage}</p>
      <h3 id="contributors">##Contributors</h3>
      <p>${contributors}</p>
      <h3 id="license">##License</h3>
      <p>${license}</p>
      <h3 id="questions">##Questions</h3>
      <p>If you have questions about this or other projects, get in touch through <a href="mailto:${email}">email</a> 
      or find me on <a href="https://github.com/${github}">GitHub</a></p>

    </body>
    </html>`
   
    const filename = path.join(__dirname,"html","index.html")

    fs.writeFile(filename, htmlContent, (err) =>
    err ? console.log(err) : console.log('Success!')
    )

  });


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
