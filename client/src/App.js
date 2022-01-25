import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import LoginSignup from './pages/LoginSignup'
import Begin from './pages/Begin'
import Main from './pages/Main'
import Mypage from './components/Mypage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Begin />} />
        <Route path='/main' element={<Main />} />
        <Route path='/login' element={<LoginSignup />} />
        <Route path='/mypage' element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
