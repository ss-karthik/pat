import React from 'react'
import { Link } from 'react-router-dom';
const Auth = () => {
  return (
    <div className='flex gap-5'>
      <button className='text-white border border-white text-2xl py-2 px-2 rounded-lg'><Link to='/signup'>SignUp!</Link></button>
      <button className='text-white border border-white text-2xl py-2 px-2 rounded-lg'><Link to='/login'>Login</Link></button>
    </div>
  )
}

export default Auth
