const Pool = require("pg").Pool;

// Connection to database HotelManagementSystem
const pool = new Pool({
    user: "postgres",
    host:"localhost",
    password: "2003",
    database:"HotelManagementSystem",
    port: 5432
})

module.exports =pool;