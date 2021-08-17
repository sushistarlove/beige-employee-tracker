const connection = require("./connection");
class DB {
    constructor(connection) {
       this.connection = connection;
    }
    getAllEmployees() {
        return this.connection.promise().query("select employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id from employee")
    }

    createEmployee(employee) {
       return this.connection.query("INSERT INTO employee set ?", employee)
    }
 
    getAllRoles() {
       return this.connection.query("select role.title, role.salary, role.department_id from role")
    }

    createRole(role) {
       return this.connection.query("INSERT INTO role set ?", role)
    }

    getAllDepartments() {
       return this.connection.query("select department.id, department.name from department")
    }

    createDepartment(department) {
       return this.connection.query("INSERT INTO department set ?", department)
    }
}

module.export = new DB(connection);


