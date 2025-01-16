import { createRide } from "../services/ride.service.js";
import { validationResult } from "express-validator";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { getAddressCoordinate, getCaptainsInRadius } from "../services/maps.service.js";
import {sendMessageToSocketId} from '../../socket.js'
import Ride from "../models/ride.model.js";

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

        res
        .status(200)
        .json(new ApiResponse(200, ride, 'ride created successfully'))

        const pickupCordinates = await getAddressCoordinate(pickup)
        const captainsInRadius = await getCaptainsInRadius(pickupCordinates.lat, pickupCordinates.lng, 200)

        ride.otp = ""

        const rideWithUser = await Ride.findOne({_id: ride._id}).populate('user')

        captainsInRadius.map(captain => {
            sendMessageToSocketId(captain.socketId, {
                event: 'new-ride',
                data: rideWithUser
            })
        })

    } catch (error) {
        console.log(error)
        throw new ApiError(500, 'error while creating new ride')
    }
}

export const confirmRide = async(req,res) => {

    if(!validationResult(req).isEmpty()){
        throw new ApiError(400, 'validate error while confirming ride')
    }

    const {rideId} = req.body

    try {
        await Ride.findOneAndUpdate({_id: rideId}, {
            status: 'accepted',
            captain: req.captain._id
        })

        const ride = await Ride.findOne({_id: rideId})
        .populate('user').populate('captain').select('+otp')

        res
        .status(200)
        .json(new ApiResponse(200, ride, 'ride confirmed'))

        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-confirmed',
            data: ride
        })

        return

    } catch (error) {
        throw new ApiError(500, 'error while confirm ride')
    }
}