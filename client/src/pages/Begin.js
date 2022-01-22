import React from 'react'
import styled from 'styled-components'


export const Introduce = styled.div`
  color: red;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
`

export const Start = styled.div`
  color: black;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
`

function App () {
  return (
    <>
      <img
        src='https://cdn.discordapp.com/attachments/932852459003609098/934361076898861086/logo.png'
        alt='GAJA Logo'
        
      />
      <Introduce>
        <h1>hi</h1>
      </Introduce>
      <Start>
        <div>시작하기</div>
      </Start>
    </>
  )
}

export default App
