import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import LoginSignup from './pages/LoginSignup'
import Login from './pages/Login'
import Begin from './pages/Begin'
import Main from './pages/Main'
import Signup from './pages/Signup'

function App () {
  const [isLogin, setIsLogin] = useState(false)
  const [accessToken, setAccessToken] = useState(1)

  useEffect(() => {
    const log = localStorage.getItem('authenticated');
    if (log) {
      setIsLogin(true);
      setAccessToken(log)
    }
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Begin />} />
        <Route path='/main' element={<Main accessToken={accessToken} isLogin={isLogin} setIsLogin={setIsLogin} setAccessToken={setAccessToken} />} />
        <Route path='/login' element={<Login setIsLogin={setIsLogin} setAccessToken={setAccessToken} />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
