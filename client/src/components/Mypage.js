import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import Myinfo from './Myinfo'
import Changepassword from './Changepassword'
import Managelicense from './Managelicense'
import Signout from './Signout';


export const MyPage = styled.div`
  display: flex;
  width: 100%;
  /* align-items: center; */
  /* justify-content: center; */
`

export const Sidebar = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: 3rem;
  /* background-color: skyblue; */
`

export const List = styled.div`
  display: flex;
  margin-top: -15px;
  margin-right: 3rem;
  align-items: flex-start;
  justify-content: center;
  line-height: 40px;

  .submenu {
    cursor: pointer;
  }

  .focused {
    color: #2573ef;
    font-weight: bold;
  }
`

function Mypage() {

  const [currentTab, setcurrentTab] = useState(0);
  const list = [<Myinfo />, <Managelicense />, <Changepassword />, <Signout />]

  const selectMenuHandler = (index) => {
    console.log(index)
    setcurrentTab(index);
  };

  return (
    <>
      <MyPage>

        <Sidebar>
          <h2>MENU</h2>
          <List>
            <ul>
              <li key={0}
                onClick={() => selectMenuHandler(0)}
                className={currentTab === 0 ? 'focused' : 'submenu'}>
                내 정보
              </li>
              <li key={1}
                onClick={() => selectMenuHandler(1)}
                className={currentTab === 1 ? 'focused' : 'submenu'}>
                자격증 관리
              </li>
              <li key={2}
                onClick={() => selectMenuHandler(2)}
                className={currentTab === 2 ? 'focused' : 'submenu'}>
                비밀번호 변경
              </li>
              <li key={3}
                onClick={() => selectMenuHandler(3)}
                className={currentTab === 3 ? 'focused' : 'submenu'}>
                회원탈퇴
              </li>
            </ul>
          </List>
        </Sidebar>

        <p>{list[currentTab]}</p>

      </MyPage>
    </>
  )
}

export default Mypage
