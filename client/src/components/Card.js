import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 250px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  cursor: pointer;
  }
`

const Head = styled.div`
  text-align: center;
  position: absolute;
  background: #2573ef;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin: auto;
  margin-bottom: -2rem;
  top: 0;
  height: 75px;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: bold;
`


const Card = ({ name, start, expiration }) => {
  return (
    <Container>
      <Head>
        <span className='D-day'>D + 3</span>
      </Head>
      <span className='internship_title'>한국장학재단</span>
      <span className='internship_expiration'>2020.12.12 ~ 2021.1.1</span>
    </Container>
  )
}

export default Card
