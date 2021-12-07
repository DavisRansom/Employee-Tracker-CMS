//Bring in Inquirer
const inquirer = require('inquirer');
const { addARole, addAnEmployee } = require('./db');
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
        case "View Departments": return viewAllDepartments();
        case "View All Roles": return viewAllRoles();
        case "View All Employees": return viewAllEmployees();
        case "Add a Department": return addADepartment();
        case "Add a Role": return addANewRole();
        case "Add an Employee": return addAnEmployee();
        case "Update an Employee Role": return
        case "Exit": return finish();
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
    })
}

function viewAllEmployees() {
  db.viewAllEmployees()
    .then(([rows]) => {
      console.table(rows);
      mainMenu();
    })
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
  const response = await inquirer.prompt({
    message: "What is the name of the role that you would like to add?",
    name: "name"
  });
  const [rows] = await db.addADepartment(response)
  console.table(rows)
  mainMenu();
}

async function addAnEmployee() {
  const response = await inquirer.prompt({
    message: "What is the first name of the employee that you would like to add?",
    name: "First Name"
  });
  inquirer.prompt({
    name: "Last Name",
    message: "What is the last name of the employee that you would like to add?",
  });
  inquirer.prompt({
    name: "Role",
    message: "What is the role of the employee that you are currently adding?",
    type: "list",
    choices: ["Salesperson", "Lead Engineer", "Software Engineer", "Account Manager", "Accountant", "Legal Team Lead", "Lawyer", "Exit"]
  });
  const [rows] = await db.add(response)
  console.table(rows)
  mainMenu();
}