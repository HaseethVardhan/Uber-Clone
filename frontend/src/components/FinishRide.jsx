import React from "react";
import { Link } from "react-router-dom";

const FinishRide = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0 "
        onClick={() => {
          props.setfinishRidePanel(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        Finish this Ride
      </h3>

      <div className="flex items-center justify-between p-4 border-2 bg-yellow-400 rounded-lg mt-4 ">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
            alt=""
          />
          <h2 className="text-lg font-mediumm">Harsh Patel</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>

      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className=" text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-gray-600 text-sm -mt-1">
                Kankariya Talab, Ahmedabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className=" text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-gray-600 text-sm -mt-1">
                Kankariya Talab, Ahmedabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">&#8377;193.20</h3>
              <p className="text-gray-600 text-sm -mt-1">Cash Cash</p>
            </div>
          </div>
        </div>

        <div className="mt-10 w-full">
          <Link
            to="/captain-home"
            onClick={() => {
              props.setconfirmRidePopupPanel(true);
            }}
            className="w-full flex justify-center mt-5 bg-green-600 text-white text-lg font-semibold p-3 rounded-lg"
          >
            Finish Ride
          </Link>



        </div>
      </div>
    </div>
  );
};

export default FinishRide;