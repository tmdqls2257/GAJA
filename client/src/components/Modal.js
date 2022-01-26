import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
  min-width: 500px;
  height: 300px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`
const H1 = styled.h1`
  margin-bottom: 40px;
`
const Modal = ({ setOpenModal, modalText }) => {
  const [path, setPath] = useState('')
  const modalHandler = () => {
    if (modalText === '회원가입이 필요합니다.') {
      setPath('/signup')
    } else if (modalText === '로그인 되었습니다.') {
      setPath('/main')
    } else {
      setPath('/')
    }
    setOpenModal(false)
  }
  return (
    <ModalDiv>
      <ModalOverlay />
      <ModalContent>
        <H1>{modalText}</H1>
        <Link to={path}>
          <Button onClick={modalHandler}>닫기</Button>
        </Link>
      </ModalContent>
    </ModalDiv>
  )
}

export default Modal
