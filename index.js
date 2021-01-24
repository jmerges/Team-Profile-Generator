var inquirer = require("inquirer");
var Employee = require("./lib/Employee");
var Manager = require("./lib/Manager");
var Intern = require("./lib/Intern");
var Engineer = require("./lib/Engineer");

var employees = [];

function promptManager() {
    inquirer.prompt([
        {
            message: "Please enter the employee manager's name",
            name: "name"
        },
        {
            message: "Please enter the manager's email",
            name: "email"
        },
        {
            message: "Please enter the manager's office number",
            name: "officeNumber"
        }
    ]).then(data => {
        var mngr = new Manager(data.name, employees.length+1, data.email, data.officeNumber);
        employees.push(mngr);
        menu();
    });
}

function menu() {
    inquirer.prompt([
        {
            type: "list",
            name: "menuChoice",
            choices: ["Add an intern", "Add an engineer", "Finish building team"],
            message: "Add intern, engineer, or finish building team"
        }
    ]).then(data => {
        switch(data.menuChoice) {
            case "Add an intern":
                addIntern();
                break;
            case "Add an engineer":
                addEngineer();
                break;
            case "Finish building team":
                buildTeam();
                break;
            default:
                buildTeam();
        }
    })
}

function addIntern() {
    inquirer.prompt([
        {
            message: "Please enter the intern's name",
            name: "name"
        },
        {
            message: "Please enter the intern's email",
            name: "email"
        },
        {
            message: "Please enter the intern's school",
            name: "school"
        }
    ]).then(data => {
        var intrn = new Intern(data.name, employees.length+1, data.email, data.school);
        employees.push(intrn);
        menu();
    });
}

function addEngineer() {
    inquirer.prompt([
        {
            message: "Please enter the engineer's name",
            name: "name"
        },
        {
            message: "Please enter the engineer's email",
            name: "email"
        },
        {
            message: "Please enter the engineer's github",
            name: "github"
        }
    ]).then(data => {
        var engi = new Engineer(data.name, employees.length+1, data.email, data.github);
        employees.push(engi);
        menu();
    });
}

function buildTeam() {
    console.log(employees);
}

promptManager();