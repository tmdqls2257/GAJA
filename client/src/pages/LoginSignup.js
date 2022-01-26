import React, { useState } from 'react'
import styled from 'styled-components'
import gaja from '../images/logo.png'
import Header from '../components/Header'

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

const LoginSignup = ({ isSignup }) => {
  const [openModal, setOpenModal] = useState(false)

  const isKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/
  const isEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
  const isPerfectKorean = /^[\가-\힣+]*$/

  const [ID, setID] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')
  const [name, setName] = useState('')

  const [warnID, setWarnID] = useState('')
  const [warnPassword, setWarnPassword] = useState('')
  const [warnRepassword, setWarnRepassword] = useState('')
  const [warnName, setWarnName] = useState('')

  const IDHandler = (e) => {
    setID(e.target.value)
    blur(e)
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value)
    blur(e)
  }
  const repasswordHandler = (e) => {
    setRepassword(e.target.value)
    blur(e)
  }
  const nameHandler = (e) => {
    setName(e.target.value)
    blur(e)
  }
  
  const loginValidater = () => {
    if (ID && password) {
      if (!warnID && !warnPassword) {
        //! 서버에 로그인 요청
        //! main으로 리다이렉트
        //? 둘중 하나가 틀리면 에러문구 화면에 보여주기
      }
    } else {
      setWarnID('아이디 또는 비밀번호가 잘못되었습니다.')
      setWarnPassword('아이디 또는 비밀번호가 잘못되었습니다.')
    } 
  }
  const validater = () => { //! 유효성 검사 함수를 라우트해주는 함수
    if (isSignup) {
      signupValidater()
    } else {
      loginValidater()
    }
  }
  const signupValidater = () => {
    if (ID && password && repassword && name) {
      if (!(warnID || warnPassword || warnRepassword || warnName)) {
        //! 서버에 회원가입 요청
        //! 그 이후 모달창 띄우기
        //! 그 이후 isSignup = false로 바꿔서 로그인 화면 보여주기
      }
    }
  }
  const modalHandler = () => { //! 모달을 띄우기 위한 함수
    if (!isSignup) {
      return
    }
    setOpenModal(true)
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
      return
    }

    if (type === 'password-reconfirm') {
      if (!value) {
        setWarnRepassword('필수 항목입니다.')
      } else if (!password) {
        setWarnRepassword('먼저 비밀번호를 입력하여 주십시오.')
      } else if (password !== repassword) {
        setWarnRepassword('비밀번호가 일치하지 않습니다')
      } else {
        setWarnRepassword('')
      }
      return
    }

    if (type === 'name') {
      if (!value) {
        setWarnName('필수 항목입니다.')
      } else if (!isPerfectKorean.test(value) || value.length < 2 || value.length > 4) {
        setWarnName('이름은 2자 이상 4자 이하의 한글로 작성해야 합니다.')
      } else {
        setWarnName('')
      }
    }
  }

  return (
    <>
      {openModal ? <Modal setOpenModal={setOpenModal} isSignup={isSignup} /> : null}
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

          {isSignup
            ? <>
              <div>
                <label htmlFor='password-reconfirm'>비밀번호 확인</label><br />
                <input id='password-reconfirm' type='password' value={repassword} onChange={repasswordHandler} />
                <HiddenMessege>{warnRepassword}</HiddenMessege>
              </div>
              <div>
                <label htmlFor='name'>이름</label><br />
                <input id='name' type='text' placeholder='이름은 2자 이상 4자 이하의 한글입니다.' value={name} onChange={nameHandler} />
                <HiddenMessege>{warnName}</HiddenMessege>
              </div>
            </>
            : null}
          <Button onClick={validater}>{isSignup ? '회원가입' : '로그인'}</Button>
        </Container>
      </Box>
    </>
  )
}

export default LoginSignup
