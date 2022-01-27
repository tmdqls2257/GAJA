import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components';
import Modal from './Modal'

export const Container = styled.button`
  display: flex;
  margin: auto;
  background-color: white;
  border-color: white;
  border-width: 0px;
`

function Signout({ accessToken }) {

  const [password, setPassword] = useState('')

  const [openModal, setOpenModal] = useState(false)
  const [modalText, setModalText] = useState('')

  let username;
  let email;

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSignout = () => {
    axios
      .get('https://localhost:4000/mypage/mypage', {
        headers: {
          Authorization: `accessToken=${accessToken}`,
          'Content-Type': 'application/json'
        },
        withCredentials: true
      })
      .then((response) => {
        username = response.data.data.userInfo.userName
        email = response.data.data.userInfo.email
      })
      .catch((error) => {
        throw error
      })

    axios
      .post('https://localhost:4000/user/signout',
        {
          username: username,
          password: password,
          email: email
        },
        {
          headers: {
            Authorization: `accessToken=${accessToken}`,
            'Content-Type': 'application/json'
          },
          withCredentials: true
        })
      .then((response) => {
        setModalText('이용해주셔서 감사합니다.')
        setOpenModal(true)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <h1 className='title'>회원탈퇴 ＞</h1>
      <div>
        <label
          htmlFor='signout_box'
          className='signout_box_title'
        >
          • 비밀번호 확인
        </label>
        <input
          type='password'
          id='signout_box'
          className='signout_box'
          placeholder='비밀번호를 입력해주세요.'
          onChange={(e) => handlePassword(e)}
        />
      </div>
      <Container>
        <button
          className='signout_button'
          onClick={() => handleSignout()}
        >
          회원탈퇴
        </button>
      </Container>
    </>
  )
}

export default Signout
