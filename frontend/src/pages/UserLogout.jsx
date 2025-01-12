import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogout = () => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    axios.get(`${import.meta.env.VITE_BASE_URL}/user/logout`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    }).then((response) => {

        if(response.status === 200 || response.status === 201){
            localStorage.removeItem('token')
        }
        navigate('/login')

    })

  return (
    <>
    User Logout
    </>
  )
}

export default UserLogout