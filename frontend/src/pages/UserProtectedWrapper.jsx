import React , { useContext, useEffect}from 'react'
import { useNavigate } from 'react-router-dom'

const UserProtectedWrapper = ({children}) => {

  const navigate = useNavigate()
    const token = localStorage.getItem('token')

    useEffect(() => {

      if(!token || token === null){
        navigate('/login')
      }
    }, [token])


  return (
    <>
        {children}
    </>
  )
}

export default UserProtectedWrapper