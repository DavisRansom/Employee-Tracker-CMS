//Bring in Inquirer
const inquirer = require('inquirer');

//Bring in the database created in connection.js
const db = require('./db');
//Bring in ConsoleTable
require('console.table');

start();

function start() {
  console.log("Welcome to my app!");
  mainMenu();
}

function mainMenu() {
  inquirer.prompt({
    message: 'Use the arrow keys to choose one of the selections from the list',
    name: "action",
    type: "list",
    choices: ["View Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role", "Exit"]
  })
    .then(response => {
      switch (response.action) {
        case "View Departments": viewAllDepartments(); break;
        case "View All Roles": viewAllRoles(); break;
        case "View All Employees": viewAllEmployees(); break;
        case "Add a Department": addADepartment(); break;
        case "Add a Role": addANewRole(); break;
        case "Add an Employee": addANewEmployee(); break;
        case "Update an Employee Role": updateAnEmployeeRole(); break;
        case "Exit": finish(); break;
      }
    });
}

function finish() {
  console.log("Thank you for using my app!");
  process.exit();
}

function viewAllDepartments() {
  db.viewAllDepartments()
    .then(([rows]) => {
      console.table(rows);
      mainMenu();
    });
}

function viewAllRoles() {
  db.viewAllRoles()
    .then(([rows]) => {
      console.table(rows);
      mainMenu();
    });
}

function viewAllEmployees() {
  db.viewAllEmployees()
    .then(([rows]) => {
      console.table(rows);
      mainMenu();
    });
}

async function addADepartment() {
  const response = await inquirer.prompt({
    message: "What is the name of your new department?",
    name: "name"
  });
  const [rows] = await db.addADepartment(response)
  console.table(rows)
  mainMenu();
}

async function addANewRole() {
  const response = await inquirer.prompt([
    {
      message: "What is the name of the role that you would like to add?",
      name: "title"
    },
    {
      message: "What is the salary of the role that you would like to add?",
      name: "salary"
    },
    {
      message: "What is the department of the role that you would like to add?",
      name: "department_id"
    }]);
  const [rows] = await db.addANewRole(response)
  console.table(rows)
  mainMenu();
}

async function addANewEmployee() {
  const response = await inquirer.prompt([
    {
      message: "What is the first name of the employee that you would like to add?",
      name: "first_name"
    },
    {
      message: "What is the last name of the employee that you would like to add?",
      name: "last_name"
    },
    {
      name: "role_id",
      message: "What is the role id of the employee that you are currently adding?",
    },
    {
      name: "manager_id",
      message: "What is the manager id of the employee that you are currently adding?",
    }
  ]);
  const [rows] = await db.addANewEmployee(response)
  console.table(rows)
  mainMenu();
}

async function updateAnEmployeeRole() {
  const {id, role_id} = await inquirer.prompt([
    {
      message: "What is the id of the employee that you would like to change the role of?",
      name: "id"
    },
    {
      name: "role_id",
      message: "What is the new role that you would like this employee to have?",
    }
  ]);
  const [rows] = await db.updateAnEmployeeRole(id, {role_id})
  console.table(rows)
  mainMenu();
}