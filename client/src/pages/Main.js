import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import styled from 'styled-components'

export const Box = styled.div`
  height: 1050px;
`

function Main({ accessToken, isLogin, setIsLogin, setAccessToken }) {
  return (
    <>
      <Header isLogin={isLogin} setIsLogin={setIsLogin} setAccessToken={setAccessToken} />
      <Box>
        <Menu accessToken={accessToken} isLogin={isLogin} />
      </Box>
      <Footer />
    </>
  )
}

export default Main
