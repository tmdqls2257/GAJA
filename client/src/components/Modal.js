import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    text-decoration: none;
    text-decoration-line: none;
    color: white;


    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        text-decoration-line: none;
    }
`

export const Button = styled.div`
  background: #2573ef;
  width: 200px;
  height: 60px;
  border-radius: 60px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #1C53B5;
  }
`
const ModalDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:1000;
`

const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
`

const ModalContent = styled.div`
  background-color: white ;
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  position: relative;
  top: 0px;
  border-radius: 10px;
  max-width: 40%;
  min-width: 550px;
  height: 300px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`

const H1 = styled.h1`
  margin-bottom: 40px;
`

const Modal = ({ setOpenModal, modalText }) => {
  const [path, setPath] = useState('')

  useEffect(() => {
    if (modalText === '회원가입이 필요합니다.') {
      setPath('/signup')
    } else if (modalText === '로그인 되었습니다.') {
      setPath('/main')
    } else if (modalText === '이미 등록되어 있는 계정입니다.' || modalText === '회원가입 되었습니다.') {
      setPath('/login')
    }
  }, []) //! Too many re-render가 나오면 useEffect 사용을 고려해보자

  return (
    <ModalDiv>
      <ModalOverlay />
      <ModalContent>
        <H1>{modalText}</H1>
        <StyledLink to={path}>
          <Button onClick={() => setOpenModal(false)}>
            닫기
          </Button>
        </StyledLink>
      </ModalContent>
    </ModalDiv>
  )
}

export default Modal
