import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';
import TodoApp from './Components/TodoApp';
import './App.css'
import Landing from './Components/Landing';
import Cookies from 'js-cookie';

const App = () => {
  const [token, setToken] = useState(false);
  if(token)
    Cookies.set('token', JSON.stringify(token), { expires: 7 });
  useEffect(()=>{
    const storedToken = Cookies.get('token');
    if (storedToken) {
      setToken(JSON.parse(storedToken));
    }
  }, [])

  
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Landing token={token}/>}/>
        <Route path={'/signup'} element={<Signup/>}/>
        <Route path={'/login'} element={<Login setToken={setToken}/>}/>
        {token && <Route path={'/home'} element={<TodoApp token={token} setToken={setToken}/>}/>}
      </Routes>
    </div>
  )
}

export default App
