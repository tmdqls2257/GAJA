import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import Begin from './pages/Begin'
import Main from './pages/Main'
import Menu from './components/Menu'
import Header from './components/Header'
import Footer from './components/Footer'
import Mypage from './components/Mypage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Begin />} />
        <Route path="mypage/" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
