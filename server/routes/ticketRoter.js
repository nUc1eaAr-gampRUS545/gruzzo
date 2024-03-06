const Router = require('express')
const router = new Router()
const ticketController = require('../controllers/saveTicket')

router.post ('/', ticketController.createTiket)
router.get ('/', ticketController.getTickets)
router.delete('/:id', ticketController.deleteTicket);

module.exports = router