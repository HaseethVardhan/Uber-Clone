import express from 'express'
import { body } from 'express-validator'
import { createNewRide, confirmRide } from '../controllers/ride.controller.js'
import { verifyCaptain, verifyUser } from '../middleware/auth.middleware.js'

const router = express.Router()

router.post('/create', 
    verifyUser,
    body('pickup').isString().isLength({min:3}).withMessage('Invalid pickup address'),
    body('destination').isString().isLength({min:3}).withMessage('Invalid destination address'),
    body('vehicleType').isString().isIn(['auto', 'car', 'moto']).withMessage('Invalid vehicle'),
    createNewRide
)

router.post('/confirm', 
    verifyCaptain,
    body('rideId').isMongoId().withMessage("invalid Ride id"),
    confirmRide
)

export default router