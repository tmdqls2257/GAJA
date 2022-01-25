import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import Myinfo from './Myinfo'
import Changepassword from './Changepassword'
import Managelicense from './Managelicense'
import Signout from './Signout';

export const Container = styled.div`
  max-width: 100vw;
  min-width: 1190px;
`

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
  margin-left: 20rem;
  margin-right: 3rem;
  /* background-color: skyblue; */
`

export const Desc = styled.div`
  margin-left: 1rem;
  margin-top: 5rem;
  margin-bottom: 10rem;
  min-height: 450px;
`


export const List = styled.div`
  /* position: absolute; */
  margin-top: 15px;
  margin-left: 30px;
  display: flex;
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

  .focused_signout {
    color: #FF2C48;
    font-weight: bold;
  }
`

function Mypage() {

  const [currentTab, setcurrentTab] = useState(0);
  const list = [<Myinfo />, <Managelicense />, <Changepassword />, <Signout />]

  const selectMenuHandler = (index) => {
    setcurrentTab(index);
  };

  return (
    <>
      <Container>
        <MyPage>

          <Sidebar>
            <h2 className='mypage_menu'>MENU</h2>
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
                  className={currentTab === 3 ? 'focused_signout' : 'submenu'}>
                  회원탈퇴
                </li>
              </ul>
            </List>
          </Sidebar>

          <Desc>
            <p>{list[currentTab]}</p>
          </Desc>

        </MyPage>
      </Container>
    </>
  )
}

export default Mypage
