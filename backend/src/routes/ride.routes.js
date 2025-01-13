import express from 'express'
import { body } from 'express-validator'
import { createNewRide } from '../controllers/ride.controller.js'
import { verifyUser } from '../middleware/auth.middleware.js'

const router = express.Router()

router.post('/create', 
    verifyUser,
    body('pickup').isString().isLength({min:3}).withMessage('Invalid pickup address'),
    body('destination').isString().isLength({min:3}).withMessage('Invalid destination address'),
    body('vehicleType').isString().isIn(['auto', 'car', 'moto']).withMessage('Invalid vehicle'),
    createNewRide
)

export default router