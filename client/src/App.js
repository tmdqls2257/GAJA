import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import LoginSignup from './pages/LoginSignup'
import Login from './pages/Login'
import Begin from './pages/Begin'
import Main from './pages/Main'
import Mypage from './components/Mypage'
import Modal from './components/Modal'

function App () {
  const [isLogin, setIsLogin] = useState(false)
  const [accessToken, setAccessToken] = useState(1)

  const loginHandler = (data) => {
    setIsLogin(true)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Begin />} />
        <Route path='/main' element={<Main accessToken={accessToken} isLogin={isLogin} />} />
        <Route path='/login' element={<Login loginHandler={loginHandler} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
