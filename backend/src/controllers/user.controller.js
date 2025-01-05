import {User} from '../models/user.model.js'
import {asyncHandler} from '../utils/asyncHandler.js'
import ApiError from '../utils/ApiError.js'
import { validationResult } from 'express-validator'
import ApiResponse from '../utils/ApiResponse.js'

const registerUser = asyncHandler( async(req, res) => {

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        console.log(errors)
        throw new ApiError(400, 'express validation error')
    }

    const {fullname, email, password} = req.body

    if(!fullname.firstname || !email || !password){
        throw new ApiError(400, 'All fields are necessary')
    }

    const existUser = await User.findOne({email})

    if(existUser){
        throw new ApiError(400, 'User already exists with mail')
    }
    
    const hashedPassword = await User.hashPassword(password)
    const token = await User.generateAuthToken()

    
    const user = await User.create({
         fullname: {
            firstname: fullname.firstname.toLowerCase(),
            lastname: fullname.lastname.toLowerCase()
        },
        email: email.toLowerCase(),
        password: hashedPassword
    })
    

    return res
    .status(201)
    .json(
        new ApiResponse(201, {user, token}, 'User created successfully')
    )


})

const loginUser = asyncHandler( async(req,res) => {
    
})

export {registerUser}