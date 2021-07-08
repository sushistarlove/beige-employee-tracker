DROP DATABASE IF EXISTS trackerDB;
CREATE DATABASE trackerDB;
USE DATABASE trackerDB;

CREATE TABLE department (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCAHR(30)
)

CREATE TABLE role (
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCAHR(30),
salary DECIMAL,
department_id INT,
constraint FK_department FOREIGN KEY (department_id) references department(id) ON DELETE cascade
)

CREATE TABLE employee (
id INT PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
constraint FK_role FOREIGN KEY (role_id) references role(id) ON DELETE cascade
manager_id INT,
constraint FK_manager FOREIGN KEY (manager_id) referneces manager(id) ON DELETE cascade
)