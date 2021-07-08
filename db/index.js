const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }
    getAllEmployees() {
        this.connection.query("select employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id from employee")
    }

    createEmployee(employee) {
        this.connection.query("INSERT INTO employee set ?", employee)
    }
 
    getAllRoles() {
        this.connection.query("select role.title, role.salary, role.department_id from role")
    }

    createRole(role) {
        this.connection.query("INSERT INTO role set ?", role)
    }

    getAllDepartments() {
        this.connection.query("select department.id, department.name from department")
    }

    createDepartment(department) {
        this.connection.query("INSERT INTO department set ?", department)
    }
}