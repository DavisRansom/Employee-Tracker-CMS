const mysql = require("mysql2")
const connection = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: '',
    //name of database???? database: 'employees_db',
    database: 'employees_db'
  },
);

connection.connect(function (err) {
  if (err) throw (err);
});

module.exports = connection;