import React from 'react'
import styled from 'styled-components'
import gaja from '../images/logo.png'
import background from '../images/begin_background.jpeg'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  max-width: 100vw;
  min-width: 1190px;
`

export const Background = styled.div`
  position: absolute;
  max-width: 100vw;
  min-width: 1190px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://miro.medium.com/max/8066/1*S4pTUifiVsnCIWnK8DH7lQ.jpeg');
  background-size: cover;
  z-index: -1;
`

export const Logo = styled.div`
  display: grid;
  margin-top: 3rem;
  width: 100%;
  height: 100%;
  place-items: center;
`

export const Introduce = styled.div`
  display: flex;
  background-color: rgb(255, 255, 255, 0.2);
  width: 55rem;
  height: 15rem;
  margin: 3rem auto 3rem auto;
  align-items: center;
  font-size: 1rem;
  text-align: center;
  line-height: 40px;
  justify-content: center;
  border-radius: 80px;
`

export const Start = styled.div`
  display: flex;
  color: white;
  background-color: #263A8D;
  font-size: 14px;
  margin: auto;
  width: 12rem;
  height: 5rem;
  align-items: center;
  justify-content: center;
  border-radius: 60px;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: #263A8D;
    font-size: 16px;
    transition-duration: 0.05s;
  }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;


    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

function Begin() {
  return (
    <>
      <Container>
        <Background />
        <Logo>
          <img
            src={gaja}
            className='logo'
            alt='GAJA Logo'
            width='10%'
          />
        </Logo>
        <Introduce>
          <div>
            <br /> 모든 것이 다 새로워 배워야 할 것도, 해야 할 것도 너무나 많아 바쁘기만 한 대학 생활.
            <br /> 장학금과 인턴십과 같은 내게 필요한 정보들을 하나하나 손으로 직접 찾아서 알아보기엔 시간이 부족하기만 하죠.
            <br /> 지금의 내 상황에서 신청해 볼 수 있는 장학금들, 인턴십 채용 분야들이 정리되어 한눈에 볼 수 있다면 얼마나 좋을까요?
            <br /> 대학생활에 전념하고 있는 당신에게 꼭 필요한 정보를 모아놓은 GAJA 를 이용해보세요.
            <br />
            <br />
          </div>
        </Introduce>
        <StyledLink to='main/'>
          <Start>
            <h1>시작하기</h1>
          </Start>
        </StyledLink>
      </Container>
    </>
  )
}

export default Begin
