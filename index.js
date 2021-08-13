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
        type: 'list',
        message: 'What license would you like to add (https://choosealicense.com/)?',
        name: 'license',
        choices: ['GNU_GPLv3', 'MIT', 'example 3']
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
    
    let mdContent = `
# ${title}
 
![License:${license}](https://img.shields.io/badge/License-${license}-blue.svg)

## Description
${describewhy}
${describewhat}
Table of Contents
Installation
Usage
Contributors
License
Questions


## Installation
${installation}
## Usage
${usage}
## Contributors
${contributors}
## License
${license}
## Questions
If you have questions about this or other projects, get in touch through email at ${email} or find me on GitHub at ${github}`
   
    const filename = path.join(__dirname,"md","README.md")

    fs.writeFile(filename, mdContent, (err) =>
    err ? console.log(err) : console.log('Success!')
    )

  });
