import React from 'react'
import License from './License'
import styled from 'styled-components'
import profile from '../images/profile.png'
import './Myinfo.css'

export const MyInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-left: 50px;
`

export const Information = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const Profile = styled.div`
  display: flex;
  margin: auto;
  margin-top: -5px;
  width: 100%;
  height: 100%;
  align-items: center;
  /* justify-content: center; */
  line-height: 20px;
  `

// props로 이름이랑 이메일 받아오면 NAME: {name}, E-MAIL: {email} 형식으로 바꾼다.
function Myinfo() {
  return (
    <>
      <MyInfo>
        <Information>
          {/* <ProfileImage> */}
          <img
            src={profile}
            className='profile'
            alt='Profile Image'
            width='17%'
          />
          {/* </ProfileImage> */}
          <Profile>
            <div>
              <h2 id='greet'>
                어서오세요,
                <span id='user'> OOO</span> 님!
              </h2>
              <div className='item'>
                NAME:
                <span id='user_name'> 이름</span>
              </div>
              <div className='item'>
                E-MAIL:
                <span id='user_email'> 이메일</span>
              </div>
            </div>
          </Profile>
        </Information>
        <License />
      </MyInfo>
    </>
  )
}

export default Myinfo
