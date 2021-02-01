// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const terminalQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'username'
        },
        {
            type: 'input',
            message: "What is your email address?",
            name: 'email'

        },
        {
            type: 'input',
            message: "What is your projects name?",
            name: 'title'
        },
        {
            type: 'input',
            message: "What is a short description of your project?",
            name: 'description'
        },
        {
            type: 'list',
            message: "What kind of license would you like your project to have?",
            name: 'license',
            choices: ['MIT', 'Apache 2.0', 'BSD 3', 'GPL 3.0', 'none'] 
        },
        {
            type: 'input',
            message: "What command should be run to install dependencies?",
            name: 'installDependencies'
        },
        {
            type: 'input',
            message: "What command should be run to run tests?",
            name: 'runTests',
            default: 'npm i'
        },
        {
            type: 'input',
            message: "What does the user need to know about using the repo?",
            name: 'usage'
        },
        {
            type: 'input',
            message:"What does the user need to know about contributing to the repo?",
            name: 'contributions'
        }

    ]).then((data) => {
        console.log(data);
        const content = generateMarkdown(data);
        fs.writeFile('README.md', content, err => {
            if(err) console.log(err);
            else console.log('Success!');
        });
    });
}

function init() {
    terminalQuestions()
}

init();
