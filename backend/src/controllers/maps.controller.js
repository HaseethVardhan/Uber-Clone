import { getAddressCoordinate, getDistanceTimeService } from "../services/maps.service.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import { validationResult } from 'express-validator'

export const getCoordinates = async (req, res) => {

    if (!validationResult(req).isEmpty()) {
        throw new ApiError(400, validationResult(req), 'address query invalid')
    }

    const { address } = req.query

    try {
        const coordinates = await getAddressCoordinate(address)
        return res
        .status(200)
        .json(new ApiResponse(200, coordinates, 'Coordinates fetched successfully'))
        
    } catch (error) {
        console.log(error)
        throw new ApiError(500, 'something went wrong while fetching coordinates')
    }

}

export const getDistanceTime = async (req, res) => {

    if(!validationResult(req).isEmpty()) {
        throw new ApiError(400, validationResult(req), 'origin or destination query invalid')
    }

    const { origin, destination } = req.query

    try {
        const distanceTime = await getDistanceTimeService(origin, destination)
        return res
        .status(200)
        .json(new ApiResponse(200, distanceTime, 'Distance and time fetched successfully'))
    } catch (error) {
        console.log(error)
        throw new ApiError(500, 'something went wrong while fetching distance and time')
    }


}