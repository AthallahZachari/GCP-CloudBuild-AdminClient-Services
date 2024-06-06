const mysql = require("mysql2");

/* const config = {
  host: "34.27.26.247",
  user: "root",
  password: "{NH1#9byN%ebp;x[",
  database: "kampus_upnvy",
}; */

const config = {
  host: "localhost",
  user: "root",
  password: "",
  database: "car_db",
};

const connect = mysql.createConnection(config);

// Koneksi DB
connect.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected");
});

module.exports = connect;
