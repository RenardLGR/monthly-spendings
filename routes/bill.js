const express = require('express')
const router = express.Router()
const billsController = require('../controllers/bills') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, billsController.getBills) //bills page

router.post('/createBill', billsController.createBill)

// router.put('/markComplete', todosController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteBill', billsController.deleteBill)

module.exports = router