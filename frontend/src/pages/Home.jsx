import React, {useState, useRef} from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'

const Home = () => {

  const [pickup, setpickup] = useState('')
  const [destination, setdestination] = useState('')

  const [panelOpen, setpanelOpen] = useState(false)
  const panelref = useRef(null)
  const panelCloseRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault()
    
  }

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelref.current, {
        height: '70%',
        padding:24
        // opacity:1
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    }else{
      gsap.to(panelref.current, {
        height: '0%',
        padding:0
        // opacity:0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })   
    }
  }, [panelOpen])

  return (
    <div className='h-max relative'> 
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"  />

      <div className='h-screen w-screen'>
        {/* image for temporary use */}
        <img className='h-full w-full object-cover' src='https://previews.123rf.com/images/rhoeo/rhoeo2003/rhoeo200300016/142233376-urban-taxi-service-vector-illustration-yellow-taxi-car-and-route-with-dash-line-trace-tracking.jpg'></img>
      </div>

      <div className='flex flex-col justify-end h-screen top-0 absolute w-full'>
        <div className='h-[30%] p-6 bg-white relative'>
        <h5 ref={panelCloseRef} onClick={() => {
          setpanelOpen(false)
        }} className='absolute right-6 top-6 text-2xl opacity-30'>
          <i className='ri-arrow-down-wide-line'></i>
        </h5>
        <h4 className='text-2xl font-semibold'>Find a trip</h4>
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <div className='line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full'></div>
          <input className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder='Add a pickup location' 
          
          onClick={() => {
            setpanelOpen(true)
          }} 
          
          value={pickup} onChange={(e) => {
            setpickup(e.target.value)
          }} 
          
          />
          
          <input className='bg-[#eee] px-12 py-2 text-base rounded-lg mt-3 w-full' type="text" placeholder='Enter your destination' 
          
          onClick={() => {
            setpanelOpen(true)
          }} 
          
          value={destination} onChange={(e) => {
            setdestination(e.target.value)
          }}

          />
        </form>
        </div>
        <div ref={panelref} className=' bg-white h-0'>
          <LocationSearchPanel />
        </div>
      </div>

    </div>
  )
}

export default Home