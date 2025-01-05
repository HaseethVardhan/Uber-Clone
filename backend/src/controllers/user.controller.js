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
    const token = await existUser.generateAuthToken()

    
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

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        throw new ApiError(400, 'Express validation error')
    }

    const {email, password} = req.body

    if(!email || !password){
        throw new ApiError(400, 'Enter email and password')
    }

    const existUser = await User.findOne({email}).select('+password')

    if(!existUser){
        throw new ApiError(400, 'No such user exists')
    }

    const passwordCheck = await existUser.comparePassword(password)

    if(!passwordCheck){
        throw new ApiError(400, 'Wrong password')
    }

    const user = await User.findOne({email})
    const token = existUser.generateAuthToken()

    return res
    .status(201)
    .json(new ApiResponse(201, {user, token}, 'User logged in'))

})



export {registerUser, loginUser}