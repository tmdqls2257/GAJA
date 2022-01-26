import React, { useState } from 'react'
import styled from 'styled-components'
import gaja from '../images/logo.png'
import Header from '../components/Header'
import axios from 'axios'
import Modal from '../components/Modal'

export const Box = styled.div`
  border-top : 2px solid #D3D3D3;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  min-width: 1190px;
`
export const Container = styled.div`
  margin-top: 30px;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px; 

  > img {
      width: 150px;
      height: auto;
      margin-bottom: 50px;
  }
  div {
    margin-bottom: 30px;
  }
  label {
      padding: 0 5px;
  }
  input {
      border: none;
      border-bottom: 2px solid #D3D3D3;
      max-width: 70vw;
      min-width: 550px; 
      font-size: 20px; 
      margin-top: 20px;
      padding: 10px 5px;
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

export const HiddenMessege = styled.div`
  margin-top: 7px;
  padding: 0 5px;
  font-size: 15px;
  color: red;
`

const Login = ({ loginHandler }) => {
  const [openModal, setOpenModal] = useState(false)
  const [modalText, setModalText] = useState('')

  const isKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/
  const isEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
  // const isPerfectKorean = /^[\가-\힣+]*$/

  const [ID, setID] = useState('')
  const [password, setPassword] = useState('')
  // const [repassword, setRepassword] = useState('')
  // const [name, setName] = useState('')

  const [warnID, setWarnID] = useState('')
  const [warnPassword, setWarnPassword] = useState('')
  // const [warnRepassword, setWarnRepassword] = useState('')
  // const [warnName, setWarnName] = useState('')

  const IDHandler = (e) => {
    setID(e.target.value)
    blur(e)
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value)
    blur(e)
  }

  const loginValidater = () => {
    if (ID && password) {
      if (!warnID && !warnPassword) { // 로그인 조건이 되는 경우
        axios
        .post(
          'https://localhost:4000/user/login',
          {email: ID, password},
          {'Content-Type': 'application/json', 
            withCredentials: true}
        )
          .then(res => {
            const { message } = res.data
            if (message === '회원가입이 필요합니다.') {
              setModalText('회원가입이 필요합니다.')
              setOpenModal(true)
            } else if (message === '비밀번호를 확인해주세요') {
              setWarnID('비밀번호를 확인해주세요')
            } else {
              const {accessToken} = res.data.data;
              setModalText('로그인 되었습니다.')
              setOpenModal(true)
            }
          })
          .catch(console.log)
        //! 서버에 로그인 요청
        //! main으로 리다이렉트
        // ? 둘중 하나가 틀리면 에러문구 화면에 보여주기
      }
    } else {
      setWarnID('아이디 또는 비밀번호가 잘못되었습니다.')
      setWarnPassword('아이디 또는 비밀번호가 잘못되었습니다.')
    }
  }

  const blur = (e) => {
    const value = e.target.value
    const type = e.target.id

    if (type === 'email') {
      if (!value) {
        setWarnID('필수 항목입니다.')
      } else if (!isEmail.test(value)) {
        setWarnID('이메일 형식이 올바르지 않습니다.')
      } else {
        setWarnID('')
      }
      return
    }

    if (type === 'password') {
      if (!value) {
        setWarnPassword('필수 항목입니다.')
      } else if (value.length < 4 || value.length > 20) {
        setWarnPassword('비밀번호는 4자 이상 20자 이하입니다.')
      } else if (isKorean.test(value)) {
        setWarnPassword('비밀번호는 한글이 포함될 수 없습니다.')
      } else {
        setWarnPassword('')
      }
    }
  }

  return (
    <>
      {openModal ? <Modal setOpenModal={setOpenModal} modalText={modalText} /> : null}
      <Header />
      <Box>
        <Container>
          <img src={gaja} alt='img' />
          <div>
            <label htmlFor='email'>아이디</label><br />
            <input id='email' type='email' placeholder='이메일 형식으로 입력해 주세요.' value={ID} onChange={IDHandler} />
            <HiddenMessege type='email'>{warnID}</HiddenMessege>
          </div>
          <div>
            <label htmlFor='password'>비밀번호</label><br />
            <input id='password' type='password' placeholder='비밀번호는 4자 이상 20자 이하입니다.' value={password} onChange={passwordHandler} />
            <HiddenMessege type='password'>{warnPassword}</HiddenMessege>
          </div>
          <Button onClick={loginValidater}>로그인</Button>
        </Container>
      </Box>
    </>
  )
}

export default Login
