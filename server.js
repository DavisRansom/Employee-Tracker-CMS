//Bring in Inquirer
const inquirer = require('inquirer');
const { addARole, addAnEmployee } = require('./db');
//Bring in the database created in connection.js
const db = require('./db');
//Bring in ConsoleTable
require('console.table');

start();

function start (){
  console.log("Welcome to my app!");
  mainMenu();
}

function mainMenu (){
  inquirer.prompt({
    message: 'Use the arrow keys to choose one of the selections from the list', 
    name: "action",
    type: "list",
    choices:["View Departments", "View All Roles", "View All Employees", "Add a Department", "Exit"]
  })
  .then(response => {
    switch(response.action){
      case "View Departments": return viewAllDepartments();
      case "View All Roles": return viewAllRoles();
      case "View All Employees": return viewAllEmployees();
      case "Add a Department": return addADepartment();
      case "Add a Role": return addARole();
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
async function addARole() {
  const response = await inquirer.prompt({
    message: "What is the name of the role that you would like to add?",
    name: "role"
  });
  const [rows] = await db.addARole(response)
      console.table(rows)
      mainMenu();
}

// function addARole() {}
//   db.addARole()
//     .then(([rows]) => {
//       console.table(rows)
//       //needs to ask for the name of the role, the salary of the role, and the department of the role
//     })
// }

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


// //viewAllRoles();
// //viewAllEmployees();
// //viewAllDepartments();



// // inquirer
// // .prompt([{
// //   type: "list-input",
// //   name: 'init_state',
// //   message: 'Use the arrow keys to choose one of the selections from the list',
// //   choices: ['View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role']
// // }], function (answers) {
// //   console.log(JSON.stringify(answers));
// // });

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
// //   console.log(JSON.stringify(answers));
// // });
// // prompt([{
// //   type: "integer",
// //   name: "role_salary",
// //   message: "What is the salary for this role?",
// // }], function (answers) {
// //   console.log(JSON.stringify(answers));
// // });

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





// // // Create a new employee
// // app.post('/new-employee', ({ body }, res) => {
// //   const sql = `INSERT INTO employee (employee_first_name')
// //     VALUES (?)`;

// //   //??????is it employee.first_name or employee.employee_first_name?
// //   const params = [employee.first_name];

// //   db.query(sql, params, (err, result) => {
// //     if (err) {
// //       res.status(400).json({ error: err.message });
// //       return;
// //     }
// //     res.json({
// //       message: 'success',
// //       data: body
// //     });
// //   });
// // });



// // // Read list of all reviews and associated movie name using LEFT JOIN
// // app.get('/api/movie-reviews', (req, res) => {
// //   const sql = `SELECT movies.movie_name AS movie, reviews.review FROM reviews LEFT JOIN movies ON reviews.movie_id = movies.id ORDER BY movies.movie_name;`;
// //   db.query(sql, (err, rows) => {
// //     if (err) {
// //       res.status(500).json({ error: err.message });
// //       return;
// //     }
// //     res.json({
// //       message: 'success',
// //       data: rows
// //     });
// //   });
// // });

// // // BONUS: Update review name
// // app.put('/api/review/:id', (req, res) => {
// //   const sql = `UPDATE reviews SET review = ? WHERE id = ?`;
// //   const params = [req.body.review, req.params.id];

// //   db.query(sql, params, (err, result) => {
// //     if (err) {
// //       res.status(400).json({ error: err.message });
// //     } else if (!result.affectedRows) {
// //       res.json({
// //         message: 'Movie not found'
// //       });
// //     } else {
// //       res.json({
// //         message: 'success',
// //         data: req.body,
// //         changes: result.affectedRows
// //       });
// //     }
// //   }
