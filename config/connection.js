const mysql = require("mysql");
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Kmj98432!",
      database: "burgers_db"
  });
}
// Make connection.

connection.connect();
// Export connection for our ORM to use.
module.exports = connection;