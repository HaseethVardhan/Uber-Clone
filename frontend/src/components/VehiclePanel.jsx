import React, {useEffect, useState} from "react";
import axios from 'axios'

const VehiclePanel = (props) => {

  useEffect(()=> {
    const func = async() => {
      const rate = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-fare?pickup=${props.pickup}&destination=${props.destination}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      props.setfares(rate.data.data)
    }

    func()
  }, [props.vehiclePanel])

  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0 "
        onClick={() => {
          props.setvehiclePanel(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
      <div
        onClick={() => {
          props.setconfirmRidePanel(true);
          props.setfinalFare(Math.ceil(props.fares.car))
          props.setfinalVehicle('car')
        }}
        className="flex border-2 mb-2 active:border-black rounded-xl w-full p-3 items-center justify-between"
      >
        <img
          className="h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png"
        />
        <div className="-ml-2 w-1/2">
          <h4 className="font-medium text-base">
            Uber Go
            <span>
              <i className="ri-user-3-line"></i> 4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away </h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">&#8377;{Math.ceil(props.fares.car)}</h2>
      </div>
      <div
        onClick={() => {
          props.setconfirmRidePanel(true);
          props.setfinalFare(Math.ceil(props.fares.moto))
          props.setfinalVehicle('moto')
        }}
        className="flex border-2 mb-2 active:border-black rounded-xl w-full p-3 items-center justify-between"
      >
        <img
          className="h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
        />
        <div className="-ml-2 w-1/2">
          <h4 className="font-medium text-base">
            Moto
            <span>
              <i className="ri-user-3-line"></i> 1
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away </h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable motorcycle ride
          </p>
        </div>
        <h2 className="text-lg font-semibold">&#8377;{Math.ceil(props.fares.moto)}</h2>
      </div>
      <div
        onClick={() => {
          props.setconfirmRidePanel(true);
          props.setfinalFare(Math.ceil(props.fares.auto))
          props.setfinalVehicle('auto')
        }}
        className="flex border-2 mb-2 active:border-black rounded-xl w-full p-3 items-center justify-between"
      >
        <img
          className="h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
        />
        <div className="-ml-2 w-1/2">
          <h4 className="font-medium text-base">
            Uber Auto
            <span>
              <i className="ri-user-3-line"></i> 3
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away </h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable Auto ride
          </p>
        </div>
        <h2 className="text-lg font-semibold">&#8377;{Math.ceil(props.fares.auto)}</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
