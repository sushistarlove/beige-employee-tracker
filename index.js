const inquirer = require("inquirer");
const db = require("./db/index");
require("console.table");


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
        console.log(val)
        switch (val.choice) {
            case "View All Employees":
                getAllEmployees();
                break;

                case "View All Employees by Role":
                getAllRoles();
                break;

                case "View All Employees by Department":
                getAllDepartments();
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

async function getAllEmployees() {
    console.log(db)
    // const employees = await db.getAllEmployees()
    // console.table(employees);
    runPrompt();
}
async function getAllRoles() {
    const roles = await db.getAllRoles()
    console.table(roles);
    runPrompt();
}
async function returnRoles() {
    const roles = await db.getAllRoles()
    return roles
}
async function getAllDepartments() {
    const departments = await db.getAllDepartments()
    console.table(departments);
    runPrompt();
}


async function addEmployee() {
    const roles = returnRoles();
    console.log(roles)
    const response = await inquirer.prompt([
        {
                type: "input",
                message: "Please ",
                name: "",
        }
    ])
    const employee = await db.addEmployee()
    runPrompt();
}
// async function getAllEmployees() {
//     // const employees = await db.getAllEmployees()
//     // console.table(employees);
//     runPrompt();
// }
// async function getAllEmployees() {
//     // const employees = await db.getAllEmployees()
//     // console.table(employees);
//     runPrompt();
// }
// async function getAllEmployees() {
//     const employees = await db.getAllEmployees()
//     console.table(employees);
//     runPrompt();
// }



runPrompt();