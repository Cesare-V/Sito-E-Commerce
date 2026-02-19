import express from 'express'
import {placeOrder, placeOrderStripe, /*placeOrderRazorpay,*/ allOrders, userOrders, updateStatus, verifyStripe} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

// Funzionalità amministrative
orderRouter.post("/list",adminAuth, allOrders)
orderRouter.post("/status",adminAuth, updateStatus)

// Funzionalità di pagamento
orderRouter.post("/place", authUser, placeOrder)
orderRouter.post("/stripe", authUser, placeOrderStripe)
/* orderRouter.post("/razorpay", authUser, placeOrderRazorpay) */

// Funzionalità dell'utente
orderRouter.post("/userorders", authUser, userOrders)

// Verifica pagamento
orderRouter.post("/verifyStripe",authUser, verifyStripe)
/*orderRouter.post("/verifyRazorpay",authUser, verifyStripe) */

export default orderRouter