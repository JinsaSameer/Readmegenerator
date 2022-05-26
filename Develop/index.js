// TODO: Include packages needed for this application
const {prompt} = require("inquirer");
const { writeFile} = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type : "input",
        message :"What is your Project title?",
        name : 'projectTitle',
    },
    
       
    {
        type : "input",
        message :"What is your GitHub Username?",
        name : "userName",
    },
    {
        type : "input",
        message : "What is your email address?",
        name : "emailAddress",
    },
    {
        type : "input",
        message : "please write a short description of your project?",
        name :"projectDescription",
    },
    {
        type : "input",
        message : "What command should be run to run tests?",
        name : "CommandRun",
    },
    {
        type : "checkbox",
        message :"What kind of license should your project have?",
        name : "ProjectLicense",
        choices : ['MIT' ,'Apache 2.0' ,'Bsd License']
    },
    {
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'contact',
        choices: ['email', 'phone', 'telekinesis'],
      },

];
const generateData = (answer) => {
 return `
 <h1 align="center">${answer.projectTitle}</h1>
 ## User Name:
 ${answer.userName}
 ## Email Address :
 ${answer.emailAddress}\n

 ##Table Of Contents\n

-[Project Description](#description)\n
-[Command for test run](#command)\n
- [Project License](#ProjectLicense)\n
-[Preffered method of Communication](#contact)\n

 ##Description\n
 
 ${answer.projectDescription}\n
 ##Command\n
 ${answer.CommandRun}\n
 ##License\n
 ${answer.ProjectLicense}\n
 ##Method of Communication\n
 ${answer.contact}

 Find me on GitHub:(https://github.com/${answer.userName}) 

 Email me :${answer.emailAddress}

 
 `

}
// TODO: Create a function to write README file
//function generateData(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    prompt([...questions]).then((answer) => {
        writeFile("Readme.md",generateData(answer),(err) => {
            if(err) throw err;
            console.log("Successfully generated Readme file");

















            
        }
        );
    });
}

// Function call to initialize app
init();
