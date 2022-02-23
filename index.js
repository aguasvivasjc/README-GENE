const inquirer = require('inquirer');
const fs = require('fs');

const askUser = () => {
inquirer.prompt([

    {
        type: "input",
        name: "title",
        message: "what is the title of your project?",
    },

    {
        type: "input",
        name: "description",
        message: "Please provide a project description",
    },

    {
        type: "input",
        name: "license",
        message: "Do you want to add a license?",
    },

    {
        type: "input",
        name: "user",
        message: "What is your User Story?",
    },

    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },

     {
        type: "input",
        name: "Repo",
        message: "What is your repo name?",
    },
])


    .then(({ title, description, license, user, github }) => {
        fs.writeFile('README.md'

//  README Template 

` ${title}

![GitHub](https://img.shields.io/github/license/${github}/${repo})


## Description

${description}

## License

${license}

## User Sotory 

${user}

## Deployed Link  
# Deployed link here: 

`