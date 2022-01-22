import React from 'react'
import styled from 'styled-components'
// import gaja from "../../public/images/logo";


export const Logo = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`


export const Introduce = styled.div`
  color: red;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const Start = styled.div`
  color: black;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

function Begin () {
  return (
    <>
      {/* <Logo>
      <img
        src={gaja}
        alt='GAJA Logo'
        />
        </Logo> */}
      <Introduce>
        <h1>hi</h1>
      </Introduce>
      <Start>
        <div>시작하기</div>
      </Start>
    </>
  )
}

export default Begin
