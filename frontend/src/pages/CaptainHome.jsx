import React, {useState, useRef, useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopup from "../components/RidePopup";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import ConfirmRidePopup from "../components/ConfirmRidePopup";
import {CaptainDataContext} from "../context/CaptainContext.jsx";

const CaptainHome = () => {

  const {captain} = useContext(CaptainDataContext)
  console.log(captain)
  
  

  const [ridePopupPanel, setridePopupPanel] = useState(true)
  const [confirmRidePopupPanel, setconfirmRidePopupPanel] = useState(false)

  const ridePopupPanelRef = useRef(null)
  const confirmRidePopupPanelRef = useRef(null)

  useGSAP(function(){
    if(ridePopupPanel){
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [ridePopupPanel]);

  useGSAP(function(){
    if(confirmRidePopupPanel){
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePopupPanel]);

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
        <CaptainDetails captain={captain}/>
      </div>
      <div ref={ridePopupPanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
        <RidePopup setridePopupPanel={setridePopupPanel} setconfirmRidePopupPanel={setconfirmRidePopupPanel} />
      </div>
      <div ref={confirmRidePopupPanelRef} className="fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
        <ConfirmRidePopup setconfirmRidePopupPanel={setconfirmRidePopupPanel} setridePopupPanel={setridePopupPanel} />
      </div>
    </div>
  );
};

export default CaptainHome;
