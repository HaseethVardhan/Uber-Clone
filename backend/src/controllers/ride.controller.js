import { createRide } from "../services/ride.service.js";
import { validationResult } from "express-validator";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

export const createNewRide = async(req, res) => {
    if(!validationResult(req).isEmpty()){
        throw new ApiError(400, 'express validator error while creating ride')
    }

    const {pickup, destination, vehicleType} = req.body

    try {
        const ride = await createRide({userId: req.user._id, pickup, destination, vehicleType})

        if(!ride){
            throw new ApiError(400, 'ride not created')
        }
        
     

        return res
        .status(200)
        .json(new ApiResponse(200, ride, 'ride created successfully'))
    } catch (error) {
        console.log(error)
        throw new ApiError(500, 'error while creating new ride')
    }
}