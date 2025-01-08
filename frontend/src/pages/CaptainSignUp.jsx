import React, {useState} from 'react' 
import { Link } from 'react-router-dom'

const CaptainSignUp = () => {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [captaindata, setcaptaindata] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault()

    setcaptaindata({
      fullname: {
        firstname,
        lastname
      },
      email,
      password
    })

    setemail('')
    setpassword('')
    setfirstname('')
    setlastname('')
  }

  return (
    <div className="py-5 px-5 h-screen flex flex-col justify-between ">
    <div>
      <img
        className="w-20 mb-3"
        src="https://www.svgrepo.com/show/505031/uber-driver.svg"
      />
      <form onSubmit={(e)=> {
          submitHandler(e)
      }}>
        <h3 className="text-lg font-medium mb-2">What's our Captain's name</h3>
        <div className='flex gap-4 mb-6'>
        <input
          required
          className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base"
          type="text"
          placeholder="First name"
          value={firstname}
          onChange={(e) => {
            setfirstname(e.target.value)
          }}
        />
        <input
          required
          className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border text-lg placeholder:text-base"
          type="text"
          placeholder="Last name"
          value={lastname}
          onChange={(e) => {
            setlastname(e.target.value)
          }}
        />
        </div>
        <h3 className="text-lg font-medium mb-2">What's our Captain's email</h3>
        <input
          required
          className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          type="email"
          placeholder="email@example.com"
          value={email}
          onChange={(e) => {
            setemail(e.target.value)
          }}
        />
        <h3 className="text-lg font-medium mb-2">Enter Password</h3>
        <input
          required
          className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value)
          }}
        />
        <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
          SignUp
        </button>
        <p className="text-center">Already have a Account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
      </form>
    </div>
    <div>
      <p className='text-[10px] leading-tight'>
        By proceeding, you consent to get calls, Whatsapp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.
      </p>
    </div>
  </div>
  )
}

export default CaptainSignUp