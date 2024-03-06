const  Pool  = require("pg").Pool
const pool = new Pool( {
  user:"postgres", 
  database:'Ticket_purchasing service',
  password:"qwerty",
  dialect: "postgres",
  host: "localhost",
  port: "5432",
});

module.exports = pool;