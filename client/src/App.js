import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import LoginSignup from './pages/LoginSignup'
import Begin from './pages/Begin'
import Main from './pages/Main'
import Mypage from './components/Mypage'

import Modal from './components/Modal'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Modal />} />
        <Route path='/main' element={<Main />} />
        <Route path='/login' element={<LoginSignup />} />
        <Route path='/mypage' element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
