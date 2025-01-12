import React from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopup from "../components/RidePopup";

const CaptainHome = () => {
  return (
    <div className="h-screen">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/captain-logout"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://previews.123rf.com/images/rhoeo/rhoeo2003/rhoeo200300016/142233376-urban-taxi-service-vector-illustration-yellow-taxi-car-and-route-with-dash-line-trace-tracking.jpg"
        ></img>
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>
      <div className="fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12">
        <RidePopup />
      </div>
    </div>
  );
};

export default CaptainHome;
