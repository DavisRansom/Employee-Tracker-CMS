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


// function addAnEmployee() {
//   db.addAnEmployee()
//     //.then(([rows]) => {
//       //console.table(rows)
//       //needs to ask for the first name of the employee, the last name of the employee, the role of the employee, and the manager of the employee
//     })
// }

// function updateAnEmployeeRole() {
//   db.updateAnEmployeeRole()
//     //.then(([rows]) => {
//       //console.table(rows)
//     })
// }



// // inquirer
// // .prompt([{
// //   type: "text-input",
// //   name: 'name',
// //   message: "What is the name of the department that you would like to add?",
// // }], function (answers) {
// //   console.log(JSON.stringify(answers));

// // });

// // inquirer
// // .prompt([{
// //   type: "text-input",
// //   name: 'role_add',
// //   message: "What is name of the role you would like to add?",
// // }], function (answers) {
// //   console.log(JSON.stringify(answers));
// // });
// // prompt([{
// //   type: "list-input",
// //   name: "role_department",
// //   message: "Which department will this role be working in?",
// // }], function (answers) {

// // });
// // prompt([{
// //   type: "integer",
// //   name: "role_salary",
// //   message: "What is the salary for this role?",
// // }], function (answers) {


// // prompt([{
// //   type: "text-input",
// //   name: "employee_first_name",
// //   message: "What is the first name of the employee that you would like to add?",
// // }], function (answers) {
// //   console.log(JSON.stringify(answers));
// // });
// // prompt([{
// //   type: "text-input",
// //   name: "employee_last_name",
// //   message: "What is the last name of the employee that you would like to add?",
// // }], function (answers) {
// //   console.log(JSON.stringify(answers));
// // });
// // prompt([{
// //   type: "list-input",
// //   name: "employee_role",
// //   message: "What is the role of the employee that you are currently adding?",
// //   choices: ["Salesperson", "Lead Engineer", "Lead Engineer", "Software Engineer", "Account Manager", "Accountant", "Legal Team Lead", "Lawyer"],
// // }], function (answers) {
// //   console.log(JSON.stringify(answers));
// // });
// // prompt([{
// //   type: "list-input",
// //   name: "employee_manager",
// //   message: "Who is the manager of the employee that you are currently adding?",
// //   choices: ["Kunal Singh", "John Doe", "Ashley Rodriguez", "Sarah Lourd"],
// // }], function (answers) {
// //   console.log(JSON.stringify(answers));
// // });

// // prompt([{
// //   type: "list-input",
// //   name: "employee_role",
// //   message: "What is the name of the employee whose role you would like to update?",
// //   choices: ["Mike Chan", "Ashley Rodriguez", "Kevin Tupik", "Kunal Singh", "Malia Brown", "Sarah Lourd", "Tom Allen"],
// // }], function (answers) {
// //   console.log(JSON.stringify(answers));
// // });
