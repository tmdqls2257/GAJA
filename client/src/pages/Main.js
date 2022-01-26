import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

function Main ({ accessToken, isLogin }) {
  return (
    <>
      <Header isLogin={isLogin} />
      <Menu accessToken={accessToken} isLogin={isLogin} />
      <Footer />
    </>
  )
}

export default Main
