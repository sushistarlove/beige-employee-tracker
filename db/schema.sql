DROP DATABASE IF EXISTS trackerDB;
CREATE DATABASE trackerDB;
USE trackerDB;

CREATE TABLE department (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30)
);

CREATE TABLE role (
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL,
department_id INT,
constraint FK_department FOREIGN KEY (department_id) references department(id) ON DELETE cascade
);

CREATE TABLE employee (
id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
constraint FK_role FOREIGN KEY (role_id) references role(id) ON DELETE cascade,
manager_id INT,
constraint FK_manager FOREIGN KEY (manager_id) references employee(id) ON DELETE cascade
)