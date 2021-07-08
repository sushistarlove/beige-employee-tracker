const inquirer = require("inquirer");
const db = require("./db");
getAllEmployees() 


function runPrompt() {
    inquirer.prompt([
        {
            type: "list",
            message: "Please Select An Option",
            name: "choice",
            choices: [
                "View All Employees",
                "View All Employees by Role",
                "View All Employees by Department",
                "Add Employee",
                "Add Role",
                "Add Department",
                "Update Employee"
            ]
        }
    ]).then(function(val) {
        switch (val.choice) {
            case "View All Employees":
                getAllEmployees();
                break;

                case "View All Employees by Role":
                getAllRoles();
                break;

                case "View All Employees by Department":
                getAllEmployees();
                break;

                case  "Add Employee":
                addEmployee();
                break;

                case "Add Role":
                addRole();
                break;

                case "Add Department":
                addDepartment();
                break;

                case "Update Employee Role":
                updateEmployeeRole();
                break;

        }
    })
}

runPrompt()