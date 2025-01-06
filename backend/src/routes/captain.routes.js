import { Router } from "express";
import {body } from 'express-validator'
import {registerCaptain} from '../controllers/captain.controller.js'

const router = Router()

router.route('/register').post([
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First Name should be atleast 3 characters'),
    body('password').isLength({min: 6}).withMessage('Password should be atleast 6 characters'),
], registerCaptain)

export default router