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

addADepartment(){
  return this.connection.promise().query(
    //????????????
  )
}

addARole(){
  return this.connection.promise().query(
    //????????????
  )
}

addAnEmployee(){
  return this.connection.promise().query(
    //????????????
  )
}

updateAnEmployeeRole(){
  return this.connection.promise().query(
    //??????????????
  )
}







  }

  module.exports = new DB(connection);