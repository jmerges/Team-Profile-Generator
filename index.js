var inquirer = require("inquirer");
var fs = require("fs");
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
    var longAssEmployeeString = "";
    for (employee of employees) {
        switch (employee.getRole()) {
            case "Manager":
                longAssEmployeeString = longAssEmployeeString.concat(`
                <div class="col-4">
                    <div class="card">
                        <header class="card-header">Manager: ${employee.name}</header>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${employee.ID}</li>
                            <li class="list-group-item">email: <a href="mailto: ${employee.email}">${employee.email}</a></li>
                            <li class="list-group-item">office number: ${employee.officeNumber}</li>
                        </ul>
                    </div>
                </div>
                `);
                break;
            case "Engineer":
                longAssEmployeeString = longAssEmployeeString.concat(`
                <div class="col-4">
                    <div class="card">
                        <header class="card-header">Engineer: ${employee.name}</header>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${employee.ID}</li>
                            <li class="list-group-item">email: <a href="mailto: ${employee.email}">${employee.email}</a></li>
                            <li class="list-group-item">github: <a href="${employee.github}">${employee.github}</a></li>
                        </ul>
                    </div>
                </div>
                `);
                break;
            case "Intern":
                longAssEmployeeString = longAssEmployeeString.concat(`
                <div class="col-4">
                    <div class="card">
                        <header class="card-header">Intern: ${employee.name}</header>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${employee.ID}</li>
                            <li class="list-group-item">email: <a href="mailto: ${employee.email}">${employee.email}</a></li>
                            <li class="list-group-item">school: ${employee.school}</li>
                        </ul>
                    </div>
                </div>
                `);
        }
    }
    fs.writeFile("./dist/index.html",`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Page</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src="https://code.jquery.com/jquery.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <header id="head" class="header">My Team</header>
    
        <div class="row">
        ${longAssEmployeeString}
        </div>
        
    </body>
    </html>`, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

promptManager();