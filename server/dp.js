const {Sequelize} = require('sequelize')
module.exports = new Sequelize("Ticket_purchasing service", "postgres", "qwerty", {
  dialect: "postgres",
  host: "localhost",
  port: "5432",
});
