const inquirer = require("inquirer");
const db = require("./db");

db.getAllEmployees() 


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
                db.getAllEmployees();
                break;

                case "View All Employees by Role":
                db.getAllRoles();
                break;

                case "View All Employees by Department":
                db.getAllEmployees();
                break;

                case  "Add Employee":
                db.addEmployee();
                break;

                case "Add Role":
                db.addRole();
                break;

                case "Add Department":
                db.addDepartment();
                break;

                case "Update Employee Role":
                db.updateEmployeeRole();
                break;

        }
    })
}

runPrompt()