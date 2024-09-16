import React, {useState} from 'react'
import { SupabaseClient } from '@supabase/supabase-js';
import { supabase } from '../../client';
import { Link } from 'react-router-dom';
const Form = () => {
    
    const [formData, setFormData] = useState({email:'', password:'', name:''});
    async function handleSubmit(e){
        try{
            e.preventDefault();
            const { data, error } = await supabase.auth.signUp(
            {
              email: formData.email,
              password: formData.password,
              options: {
                data: {
                  name: formData.name,
                }
              }
            }
          )
          alert('check mail for verification mail')
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
      <h1 className='text-5xl text-white'>Sign Up!</h1>
      <form onSubmit={handleSubmit}>
      <div className='flex flex-col items-center gap-3'> 
        <input className='text-xl text-white  border border-white px-2 py-1 rounded-md' name='email' type='text' placeholder='Email'  onChange={handleChange}/>
        <input className='text-xl text-white border border-white px-2 py-1 rounded-md' name='password' type='password' placeholder='Password' onChange={handleChange}/>
        <input className='text-xl text-white  border border-white px-2 py-1 rounded-md' name='name' type='text' placeholder='Name' onChange={handleChange}/>
        <button className='text-xl text-white border border-white px-2 py-1 rounded-md' type='submit'>Submit</button>
      </div>
      </form>
        <button className='text-slate-400 text-xl'>Already have an account?   <Link to='/login'>Login!</Link></button>
    </div>
  )
}

export default Form
