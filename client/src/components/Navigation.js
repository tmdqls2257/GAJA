import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');
  
  display: flex;
  justify-content: space-between;

  > div {
      width: 100px;
      height: 30px;
      border: 3px solid #287dfc;
      border-radius: 60px;
      cursor: pointer;
      font-family: 'Poppins', sans-serif;
      display: flex;
      justify-content:center;
      align-items: center;
      font-size: 18px;
      transition: 0.3s;
      margin-right: 10px;
      &:hover {
        transform: scale(1.1);
      }
  }
`

const Navigation = () => {
  return (
    <>
      <Container>
        <Link to='login/'>
          <div>로그인</div>
        </Link>
        <Link to='login/'>
          <div>회원가입</div>
        </Link>
        <div>GAJA 소개</div>
      </Container>
    </>
  )
}

export default Navigation
