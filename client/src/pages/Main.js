import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import internship from '../../../server/controllers/page/internship'

function Main({ accessToken, isLogin }) {

  return (
    <>
      <Header />
      <Menu accessToken={accessToken} isLogin={isLogin} />
      <Footer />
    </>
  )
}

export default Main
