const mysql = require("mysql2");

 const config = {
  host: "34.172.217.25",
  user: "root",
  password: ">Kq%^L1fulut`Q$#",
  database: "car_db",//"car_db", 
}; 

/* //coba lokal dulu
const config = {
  host: "localhost",
  user: "root",
  password: "",
  database: "car_db",
}
 */
const connect = mysql.createConnection(config);

connect.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected");
});

module.exports = connect;
