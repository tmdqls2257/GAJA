import React, { useState } from 'react'
import styled from 'styled-components'
import Internship from './Internship'
import Scholarship from './Scholarship'
import Mypage from './Mypage'

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  max-width: 100vw;
  min-width: 1190px;
  height: 200px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: #2573ef;

    > li {
    max-width: 33%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 5px 10px; 
    display: flex;
    align-items:center;
    transition: 0.4s;
    padding: 0 10px;

      &:hover {
        background: #0044FF;
        cursor: pointer;
      }

      > h1 {
        margin: 20px 0;
      }

      > span {
          font-size: 20px;
      }

      &.focused {
        background: #0044FF;
      }
    }
`

const Menu = ({ accessToken, isLogin }) => {
  const [currentTab, setcurrentTab] = useState(0)
  const list = [<Internship />, <Scholarship />, <Mypage accessToken={accessToken} isLogin={isLogin} />]

  const selectMenuHandler = (index) => {
    setcurrentTab(index)
  }

  return (
    <>
      <Ul>
        <li
          key={0}
          onClick={() => selectMenuHandler(0)}
          className={currentTab === 0 ? 'focused' : 'submenu'}
        >
          <h1>인턴쉽</h1>
          <span>각종 기업에서 실시하고 있는 인턴 채용에 대해 알아볼 수 있습니다.</span>
        </li>
        <li
          key={1}
          onClick={() => selectMenuHandler(1)}
          className={currentTab === 1 ? 'focused' : 'submenu'}
        >
          <h1>장학금</h1>
          <span>대학교, 장학재단 혹은 민간단체 등에서 지급하는 다양한 장학금에 관한 정보를 조회할 수 있습니다.</span>
        </li>
        <li
          key={2}
          onClick={() => selectMenuHandler(2)}
          className={currentTab === 2 ? 'focused' : 'submenu'}
        >
          <h1>마이페이지</h1>
          <span>개인정보를 수정할 수 있으며, 등록한 자격증을 확인할 수 있습니다.</span>
        </li>
      </Ul>
      {list[currentTab]}
    </>
  )
}

export default Menu
