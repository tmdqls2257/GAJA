import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Navigation from './Navigation'
import Searchbar from './Searchbar'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  min-width: 1190px;
`
export const Container = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Header = ({ isLogin }) => {
  return (
    <Box>
      <GlobalStyle />
      <Container>
        <Searchbar />
        <Navigation isLogin={isLogin} />
      </Container>
    </Box>
  )
}

export default Header
