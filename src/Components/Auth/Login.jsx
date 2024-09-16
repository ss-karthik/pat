import React, {useState} from 'react'
import { SupabaseClient } from '@supabase/supabase-js';
import { supabase } from '../../client';
import { Link, useNavigate } from 'react-router-dom';
const Login = ({setToken}) => {
    const navigate  = useNavigate();
    const [formData, setFormData] = useState({email:'', password:''});
    async function handleSubmit(e){
        try{
            e.preventDefault();
            const { data, error } = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password,
              })
              
          alert('logged in')
          const { data: { user } } = await supabase.auth.getUser()
          console.log(data);
          setToken(data);
          navigate('/home');
        } catch(err){
            alert(err);
        }
          
    }
    console.log(formData);
    function handleChange(e){
        setFormData((prevFormData)=>{
            return {
                ...prevFormData, 
                [e.target.name]:e.target.value
            }
        })
    }
  return (
      <div className='min-h-screen flex flex-col items-center justify-center p-4 gap-10'>
      <h1 className='text-5xl text-white'>Log In!</h1>
      <form onSubmit={handleSubmit}>
      <div className='flex flex-col items-center gap-3'> 
        <input className='text-xl text-white  border border-white px-2 py-1 rounded-md' name='email' type='text' placeholder='Email'  onChange={handleChange}/>
        <input className='text-xl text-white  border border-white px-2 py-1 rounded-md' name='password' type='password' placeholder='Password' onChange={handleChange}/>
        <button type='submit' className='text-xl text-white border border-white px-2 py-1 rounded-md'>Submit</button>
      </div>
      </form>
      <button className='text-slate-400 text-xl'>Dont have an account?   <Link to='/signup'>SignUp!</Link></button>
    </div>
  )
}

export default Login
