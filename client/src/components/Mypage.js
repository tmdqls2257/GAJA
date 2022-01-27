import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Myinfo from './Myinfo'
import Changepassword from './Changepassword'
import Managelicense from './Managelicense'
import Signout from './Signout'

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

export const Need = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 450px;
  flex-direction: column;
  line-height: 100px;
  margin-top: 7rem;
  margin-bottom: 8rem;
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

function Mypage({ accessToken, isLogin }) {
  const [currentTab, setcurrentTab] = useState(0)
  const [licenseList, setLicenseList] = useState([])
  const list = [
    <Myinfo accessToken={accessToken} />,
    <Managelicense accessToken={accessToken} licenseList={licenseList} />,
    <Changepassword accessToken={accessToken} />,
    <Signout accessToken={accessToken} />]

  useEffect(() => {
    axios
      .get('https://localhost:4000/mypage/mypage',
        {
          headers: { Authorization: `accessToken=${accessToken}` },
          'Content-Type': 'application/json',
          withCredentials: true
        })
      .then((response) => {
        setLicenseList(response.data.data.license)
      })
      .catch((error) => {
        console.log(error)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // {
  //   "data": {
  //     "userInfo": {
  //       "id": 1,
  //       "email": "forcoding95@naver.com",
  //       "userName": "forcoding95"
  //     },
  //     "license": []
  //   },
  //   "message": "마이페이지"
  // }

  const selectMenuHandler = (index) => {
    setcurrentTab(index)
  }

  return (
    <>
      <Container>
        {isLogin
          ? <MyPage>

            <Sidebar>
              <h2 className='mypage_menu'>MENU</h2>
              <List>
                <ul>
                  <li
                    key={0}
                    onClick={() => selectMenuHandler(0)}
                    className={currentTab === 0 ? 'focused' : 'submenu'}
                  >
                    내 정보
                  </li>
                  <li
                    key={1}
                    onClick={() => selectMenuHandler(1)}
                    className={currentTab === 1 ? 'focused' : 'submenu'}
                  >
                    자격증 관리
                  </li>
                  <li
                    key={2}
                    onClick={() => selectMenuHandler(2)}
                    className={currentTab === 2 ? 'focused' : 'submenu'}
                  >
                    비밀번호 변경
                  </li>
                  <li
                    key={3}
                    onClick={() => selectMenuHandler(3)}
                    className={currentTab === 3 ? 'focused_signout' : 'submenu'}
                  >
                    회원탈퇴
                  </li>
                </ul>
              </List>
            </Sidebar>

            <Desc>
              <p>{list[currentTab]}</p>
            </Desc>

          </MyPage>

          : <Need>
            <h1 className='mypage_login_title'>로그인이 필요합니다</h1>
            <Link to='/login'>
              <button className='mypage_login_button'>로그인</button>
            </Link>
          </Need>}

      </Container>
    </>
  )
}

export default Mypage
