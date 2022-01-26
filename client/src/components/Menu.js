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
  height: 250px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

    > li {
    width: 400px;
    background: #2573ef;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 7rem;
    margin-right: 7px;
    margin-left: 7px;
    margin-bottom: 7rem;
    display: flex;
    align-items:center;
    transition: 0.4s;
    padding: 0 10px;
    border-radius: 30px;

      &:hover {
        background: #0044FF;
        cursor: pointer;
      }

      > h1 {
        margin: 20px 0;
      }

      > span {
          font-size: 15px;
      }

      &.focused {
        background: #0044FF;
      }
    }
`

const Menu = ({ accessToken, isLogin }) => {
  const [currentTab, setcurrentTab] = useState(0)
  // 선택된 탭에 따라서 하단에 렌더링 되는 컴포넌트가 달라진다.
  const list = [<Internship />, <Scholarship />, <Mypage accessToken={accessToken} isLogin={isLogin} />]

  const selectMenuHandler = (index) => {
    setcurrentTab(index)
  }

  return (
    <>
      <Ul>
        <li
          // JS 원리: 각 메뉴는 인턴십(0), 장학금(1), 마이페이지(2)의 index 값을 가지고 있으며,
          // 해당 메뉴가 클릭됐을때 () 안의 index가 selectMenuHandler 로 전달되어
          // 해당 메뉴가 클릭되었음이 '상태'로 저장된다.
          // CSS 원리: 선택되면 className이 'focused', 선택이 안되면 'submenu'가 되고
          // className 에 따라 CSS 가 다르게 적용된다.
          key={0}
          onClick={() => selectMenuHandler(0)}
          className={currentTab === 0 ? 'focused' : 'submenu'}
        >
          <h1>인턴쉽</h1>
          <span>각종 기업에서 실시하고 있는 <br /> 인턴 채용정보에 대해 알아볼 수 있습니다.</span>
        </li>
        <li
          key={1}
          onClick={() => selectMenuHandler(1)}
          className={currentTab === 1 ? 'focused' : 'submenu'}
        >
          <h1>장학금</h1>
          <span>대학교, 장학재단 혹은 민간단체 등에서 지급하는 <br /> 다양한 장학금에 관한 정보를 조회할 수 있습니다.</span>
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
      {/* 현재 currentTab 의 state(=index) 에 따라 컴포넌트가 다르게 렌더링 된다 */}
      {list[currentTab]}
    </>
  )
}

export default Menu
