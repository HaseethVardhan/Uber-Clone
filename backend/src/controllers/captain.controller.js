import {Captain} from '../models/captain.model.js'
import {asyncHandler} from '../utils/asyncHandler.js'
import { validationResult } from 'express-validator'
import ApiError from '../utils/ApiError.js'
import ApiResponse from '../utils/ApiResponse.js'

const registerCaptain = asyncHandler( async (req, res)=> {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        throw new ApiError(400, 'Enter correct fields')
    }

    const {fullname , email, password, vehicle} = req.body

    if(!fullname.firstname || !email || !password || !vehicle){
        throw new ApiError(400, 'Enter all details')
    }

const hashedPassword = await Captain.hashPassword(password)

const existCaptain = await Captain.findOne({email})

if(existCaptain){
    throw new ApiError(400, 'captain already exists')
}

const newCaptain = await Captain.create({
        fullname: {
            firstname: fullname.firstname,
            lastname: fullname.lastname
        },
        email,
        password: hashedPassword,
        vehicle: {
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            type: vehicle.type
        }
})

if(!newCaptain){
    throw new ApiError(500, 'Error occured while registering captain')
}

const token = await newCaptain.generateAuthToken()

return res
.status(200)
.json(new ApiResponse(200, {newCaptain, token}, 'Captain registered'))
})

export {registerCaptain}