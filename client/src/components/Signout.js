import React, { useState } from 'react'
import axios from 'axios'

function Signout({ accessToken }) {

  const [password, setPassword] = useState('')

  let username;
  let email;

  const handleSignout = () => {
    axios
      .get('https://localhost:4000/mypage/mypage', {
        headers: {
          Authorization: `accessToken=${accessToken}`,
          'Content-Type': 'application/json'
        },
        withCredentials: true
      })
      .then((res) => {
        username = res.data.data.userInfo.userName
        email = res.data.data.userInfo.email
      })
      .catch((err) => {
        throw err
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
          비밀번호 확인
        </label>
        <input
          id='signout_box'
          className='signout_box'
          placeholder=' 자격증 종류를 입력해주세요.'
          onChange={(e) => handleSignout(e)}
        />
      </div>
      <button
        className='signout_button'
        onClick={() => handleSignout()}
      >
        회원탈퇴
      </button>
    </>
  )
}

export default Signout
