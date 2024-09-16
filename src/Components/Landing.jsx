import React from 'react'
import Auth from './Auth/Auth.jsx'
import { useNavigate } from 'react-router-dom'
const Landing = ({token}) => {
  const navigate = useNavigate();
  if(token!=null){
    navigate('/home');
  }
  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-10 p-5'>
      <h1 className='text-white text-4xl'>Welcome! - Please Sign Up or Login to continue...</h1>
      <Auth />
    </div>
  )
}

export default Landing
