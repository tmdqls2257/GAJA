import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');
  
  display: flex;
  justify-content: space-between;
  
  div {
      width: 90px;
      height: 30px;
      border: 3px solid #287dfc;
      border-radius: 60px;
      cursor: pointer;
      font-family: 'Poppins', sans-serif;
      display: flex;
      justify-content:center;
      align-items: center;
      font-size: 15px;
      transition: 0.3s;
      margin-right: 10px;
      &:hover {
        cursor: pointer;
      }
  }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

const Navigation = ({ isLogin, setIsLogin, setAccessToken }) => {

  const logoutHandler = () => {
    setIsLogin(false)
    setAccessToken('')
  }
  return (
    <>
      <Container>
        {!isLogin ?
          <>
            <StyledLink to='/login'>
              <div>로그인</div>
            </StyledLink>
            <StyledLink to='/login'>
              <div>회원가입</div>
            </StyledLink>
          </>
          :
          <div onClick={logoutHandler}>로그아웃</div>
        }
      </Container>
    </>
  )
}

export default Navigation
