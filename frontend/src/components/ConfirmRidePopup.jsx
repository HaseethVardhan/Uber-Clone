import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopup = (props) => {

    const [otp, setotp] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
    }

  return (
    <div>
        <h5
        className="p-1 text-center w-[93%] absolute top-0 "
        onClick={() => {
          props.setridePopupPanel(false);
          props.setconfirmRidePopupPanel(false)
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm this ride to Start</h3>

        <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4 '>
            <div className='flex items-center gap-3'>
                <img className='h-12 w-12 rounded-full object-cover' src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg" alt="" />
                <h2 className='text-lg font-mediumm'>Harsh Patel</h2>
            </div>
            <h5 className='text-lg font-semibold'>2.2 KM</h5>
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
              <p className="text-gray-600 text-sm -mt-1">
                Cash Cash
              </p>
            </div>
          </div>
        </div>
        
        <div className='mt-6 w-full'>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }}>

                <input type="text" placeholder='Enter OTP' className="bg-[#eee] px-6 py-4 font-mono text-base rounded-lg mt-3 w-full" value={otp} onChange={(e) => {
                    setotp(e.target.value)
                }}/>
            <Link to='/captain-riding' onClick={()=>{
          props.setconfirmRidePopupPanel(true)
        }} className="w-full text-lg flex justify-center mt-5 bg-green-600 text-white font-semibold p-3 rounded-lg">
          Confirm
        </Link>

        <button onClick={()=>{
          props.setconfirmRidePopupPanel(false)
          props.setridePopupPanel(false)
        }} className="w-full mt-2 text-lg bg-red-600 text-white font-semibold p-3 rounded-lg">
          Cancel
        </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default ConfirmRidePopup