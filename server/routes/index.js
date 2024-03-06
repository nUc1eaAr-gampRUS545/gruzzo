const Router = require('express')
const router = new Router()
const carRouter = require('./carRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const ticketsRouter = require('./ticketRoter')



router.use('/tickets', ticketsRouter)
router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/car', carRouter)

module.exports = router