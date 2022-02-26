const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

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
            type: "list",
            name: "license",
            message: "Do you want to add a license?",
            choices: [
                "None",
                "Apache License 2.0",
                "GNU General Public License v3.0",
                "MIT License",
                "Boost Software License 1.0",
                "Eclipse Public License 2.0",
            ]
        },

        {
            type: "input",
            name: "user",
            message: "What is your User Story?",
        },

        {
            type: "input",
            name: "con",
            message: "What are your contribution guidelines?",
        },

        {
            type: "input",
            name: "test",
            message: "What are your test instructions?",
        },

        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?",
        },

        {
            type: "input",
            name: "repo",
            message: "What is your repo name?",
        },

        {
            type: "input",
            name: "email",
            message: "What is your email address?",
        },

    ])
        //     .then(({ title, description, license, user, github, repo }) => {
        .then((data) => {
            writeToFile('README.md', template({ ...data }))

        });
}
//             fs.writeFile('README.md',

//  README Template 

const template = (data) => {
    return ` ${data.title}

![GitHub](https://img.shields.io/github/license/${data.github}/${data.repo})


# Description

${data.description}

# Table of Contents

* [License](#license)
* [User Story](#user-story)
* [Contribution Guidelines](#con)
* [Test Instructions](#test)
* [Questions](#email)

# License

${data.license}

# User Story

${data.user}

# Contribution Guidelines

${data.con}

# Test Instructions 

${data.test}

# Questions

## GitHub User Name 

* ${data.github}

## Email Address

* ${data.email}

## Deployed Site 
`}

const writeToFile = (fileName, data) => {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

askUser();