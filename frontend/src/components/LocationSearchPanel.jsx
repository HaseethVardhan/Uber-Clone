import React from "react";

const LocationSearchPanel = (props) => {

  const locations = [
    "24B, Near Kapoor's cafe, Sheriyans School",
    "18B, Coding school, Gujarat, India",
    "Dr. Narendra Modi Stadium, Ahmedabad, Gujarat",
    "Rk beach, Visakhapatnam, India",
  ]

  return (
    <div>

      {
        locations.map((lm, idx) => {
          return       <div key={idx} onClick={() => {
            props.setvehiclePanel(true)
            props.setpanelOpen(false)
          }} className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start">
          <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
            <i className="ri-map-pin-fill "></i>
          </h2>
          <h4 className="font-medium">
            {lm}
          </h4>
        </div>
        })
      }
      
    </div>
  );
};

export default LocationSearchPanel;
