const db = require("../DataBase.js");

class tiketController {
  async createTiket(req, res) {
    const data = req.body;
    const tickets = await db.query(
      `INSERT INTO savedTickets
       ( createdUserId, placeA, placeB,options, gazelle,date, niggers, hours, phone, price )
        values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
      [
        data.createdUserId,
        data.placeA,
        data.placeB,
        data.options,
        data.gazelle,
        data.date,
        data.niggers,
        data.hours,
        data.phone,
        data. price,
      ]
    );
    res.json(tickets.rows);
  }
  async deleteTicket(req, res) {
    const id = req.params.id;
    const deleteTicket = await db.query(
      "DELETE FROM savedTickets where id = $1",
      [id]
    );
    res.json(deleteTicket.rows);
  }

  async getTickets(req, res) {
    try {
      // Используйте значения параметров для выполнения запроса к базе данных
      const getTickets = await db.query("SELECT * FROM savedTickets");
      if(getTickets){
        return res.json(getTickets.rows);
      }
      
    } catch (error) {
      console.error("Error fetching tickets:", error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching savedTickets" });
    }
  }
}
module.exports = new tiketController();