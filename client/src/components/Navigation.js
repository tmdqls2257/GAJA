import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    /* min-height: 100vh;
    background: #297eff; */
  }
`
export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');
  display: flex;
  justify-content: space-between;

  > div {
      width: 100px;
      height: 60px;
      border: 3px solid #287dfc;
      border-radius: 60px;
      cursor: pointer;
      font-family: 'Poppins', sans-serif;
      display: flex;
      justify-content:center;
      align-items: center;
      font-size: 18px;
      transition: 0.3s;

      &:hover {
        transform: scale(1.1);
      }
  }
`

const Navigation = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <div>로그인</div>
        <div>회원가입</div>
      </Container>
    </>
  )
}

export default Navigation
