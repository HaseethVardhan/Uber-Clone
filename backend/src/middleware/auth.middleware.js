import {User} from '../models/user.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { asyncHandler } from '../utils/asyncHandler.js'
import ApiError from '../utils/ApiError.js'
import blackListToken from '../models/blackListToken.model.js'

const verifyUser = asyncHandler( async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ]

    const isBlackListToken = await blackListToken.findOne({token})

    if(isBlackListToken){
        throw new ApiError(400, 'token deleted or unauthorized access')
    }

    if(!token){
        throw new ApiError(400, 'unauthorized request')
    }

    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(decoded._id)

        req.user = user

        return next()
        
    } catch (error) {
        throw new ApiError(400, 'unauthorized')
    }
    


})


export {verifyUser}