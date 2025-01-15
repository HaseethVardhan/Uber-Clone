import React from "react";
import axios from 'axios'

const ConfirmedRide = (props) => {

  let url = ''

  const car_url = "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png"
  const moto_url = "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
  const auto_url = "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"

  if(props.finalVehicle === 'car'){
    url = car_url
  }else if(props.finalVehicle === 'moto'){
    url = moto_url
  }else{
    url = auto_url
  }

  const createRide = async() => {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, 
      {
        pickup: props.pickup,
        destination: props.destination,
        vehicleType: props.finalVehicle
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    )

    props.setfinalRide(response.data.data)
  }

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
      <h3 className="text-2xl font-semibold mb-5">Confirm your Ride</h3>
      <div className="flex gap-2 justify-between flex-col items-center">
        <img
          className="h-20"
          src={url}
        />

        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className=" text-lg ri-map-pin-2-fill"></i>
            <div>
              {/* <h3 className="text-lg font-medium">{props.pickup}</h3> */}
              <p className="text-gray-600 text-sm -mt-1">
              {props.pickup}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
          <i className=" text-lg ri-map-pin-user-fill"></i>
            <div>
              {/* <h3 className="text-lg font-medium">562/11-A</h3> */}
              <p className="text-gray-600 text-sm -mt-1">
                {props.destination}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
          <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">&#8377;{props.finalFare}</h3>
              <p className="text-gray-600 text-sm -mt-1">
                Cash Cash
              </p>
            </div>
          </div>
        </div>

        <button onClick={()=>{
          const func = async() => {
            await createRide()
          }

          func()

          props.setvehicleFound(true)
          props.setconfirmRidePanel(false)
          props.setvehiclePanel(false)
        }} className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmedRide;
