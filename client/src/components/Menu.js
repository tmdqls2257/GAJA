import React, { useState } from 'react'
import styled from 'styled-components'

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  max-width: 100vw;
  min-width: 1190px;
  height: 150px;
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
      }

      > h1 {
        margin: 20px 0;
      }

      > span {
          font-size: 20px;
      }
    }
`

const Menu = () => {
  return (
    <Ul>
      <li>
        <h1>인턴쉽</h1>
        <span>각종 기업에서 실시하고 있는 인턴 채용에 대해 알아볼 수 있습니다.</span>
      </li>
      <li>
        <h1>장학금</h1>
        <span>대학교, 장학재단 혹은 민간단체 등에서 지급하는 다양한 장학금에 관한 정보를 조회할 수 있습니다.</span>
      </li>
      <li>
        <h1>마이페이지</h1>
        <span>개인정보를 수정할 수 있으며, 등록한 자격증을 확인할 수 있습니다.</span>
      </li>
    </Ul>
  )
}

export default Menu
