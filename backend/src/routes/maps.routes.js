import express from 'express'
import { getCoordinates, getDistanceTime, getAutoSuggestions } from '../controllers/maps.controller.js'
import { verifyUser } from '../middleware/auth.middleware.js'
import {query} from 'express-validator'

const router = express.Router()

router.get('/get-coordinates', 
    query('address').isString().isLength({min:3}),
    verifyUser, getCoordinates
)

router.get('/get-distance-time',
    query('origin').isString().isLength({min:3}),
    query('destination').isString().isLength({min:3}),
    verifyUser, getDistanceTime
)

router.get('/get-suggestions',
    query('input').isString().isLength({min:3}),
    verifyUser, getAutoSuggestions
)

export default router