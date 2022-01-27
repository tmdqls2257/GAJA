import React, { useState, useEffect } from 'react'
import License from './License'
import styled from 'styled-components'
import profile from '../images/profile.png'
import './Myinfo.css'
import axios from 'axios'

export const MyInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  /* margin-top: 5rem; */
`

export const Information = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const Profile = styled.div`
  display: flex;
  width: 40%;
  height: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: 25px;
  margin-top: -1rem;
  `

// props로 이름이랑 이메일 받아오면 NAME: {name}, E-MAIL: {email} 형식으로 바꾼다.
function Myinfo({ accessToken, licenseList}) {

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')

  // console.log(accessToken)

  useEffect(() => {
    axios
      .get('https://localhost:4000/mypage/mypage',
        {
          headers: { Authorization: `accessToken=${accessToken}` },
          'Content-Type': 'application/json', withCredentials: true
        })
      .then((response) => {
        console.log(response)
        setUserName(response.data.data.userInfo.userName)
        setEmail(response.data.data.userInfo.email)
      })
      .catch((error) => {
        // console.log(error)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <MyInfo>
        <h1 className='title'>내 정보 ＞</h1>
        <Information>
          <img
            src={profile}
            className='profile'
            alt='Profile'
            width='17%'
          />
          <Profile>
            <div>
              <h2 id='greet'>
                어서오세요,
                <span id='user'> {userName}</span> 님!
              </h2>
              <div className='item'>
                NAME:
                <span id='user_name'> {userName}</span>
              </div>
              <div className='item'>
                E-MAIL:
                <span id='user_email'> {email}</span>
              </div>
            </div>
          </Profile>
        </Information>
        <License accessToken={accessToken} licenseList={licenseList} />
      </MyInfo>
    </>
  )
}

export default Myinfo
