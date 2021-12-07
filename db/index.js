const connection = require ('./connection');

class DB {
  constructor(connection){
    this.connection = connection;
  }
 viewAllDepartments(){
   return this.connection.promise().query(
     `SELECT
     department.id,
       department.name
   FROM
     department`
   )
 };
 viewAllRoles(){
  return this.connection.promise().query(
  `SELECT
    role.id,
    role.title,
    role.salary,
    role.department_id
  FROM
    role`
  )
};
viewAllEmployees(){
  return this.connection.promise().query(
  `SELECT
    employee.id,
    employee.first_name,
    employee.last_name,
    employee.role_id,
    employee.manager_id
  FROM
    employee`
  )
}

addADepartment(dept){
  return this.connection.promise().query(
    `INSERT INTO department SET ?`, dept 
  )
}

addARole(role){
  return this.connection.promise().query(
    'INSERT INTO role SET ?', role
  )
}

addAnEmployee(employee){
  return this.connection.promise().query(
    `INSERT INTO employee SET ?`, employee
  )
}

updateAnEmployeeRole(id, role){
  return this.connection.promise().query(
    `UPDATE employee SET ? WHERE id = ?`, [role, id]
  )
}
  }

  module.exports = new DB(connection);