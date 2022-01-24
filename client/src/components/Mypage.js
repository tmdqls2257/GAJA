import React from 'react'
import styled from 'styled-components'
import Myinfo from './Myinfo'
import Changepassword from './Changepassword'
import Managelicense from './Managelicense'


export const MyPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Menu = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-left: 10px;
`

export const List = styled.div`
  display: flex;
  margin-top: -15px;
  align-items: flex-start;
  justify-content: center;
  line-height: 40px;
`

function Mypage() {
  return (
    <>
      <MyPage>

        <Menu>
          <h2>MENU</h2>
          <List>
            <ul>
              <li>내 정보</li>
              <li>자격증 관리</li>
              <li>비밀번호 변경</li>
              <li>회원탈퇴</li>
            </ul>
          </List>
        </Menu>

        <Myinfo />

      </MyPage>
    </>
  )
}

export default Mypage
