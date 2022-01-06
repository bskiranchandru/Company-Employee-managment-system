const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "@lakshmi123",
    host: "localhost",
    database: "employee"
});

module.exports = pool;