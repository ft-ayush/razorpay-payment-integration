const {Router} = require('express')
const router = Router()

const {createOrder, verifyPayment} = require('../controllers/payments.controller')
router.post('/createOrder', createOrder)
router.post('/verifyPayment', verifyPayment)

module.exports = router