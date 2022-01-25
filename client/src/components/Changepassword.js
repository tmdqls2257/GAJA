import React from 'react'
import styled from 'styled-components'

export const ChangePassword = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

function Changepassword() {
  return (
    <>
      <ChangePassword>
        <h1 className='title'>비밀번호 변경 ＞</h1>
        <div>
          <span>기존 비밀번호 입력</span>
          <input type='password'
            className='password_box'
            placeholder=' 기존 비밀번호를 입력해주세요.' />
        </div>
        <div>
          <span>변경 비밀번호 입력</span>
          <input type='password'
            className='password_box'
            placeholder=' 변경할 비밀번호를 입력해주세요.' />
        </div>
        <div>
          <span>변경 비밀번호 확인</span>
          <input type='password'
            className='password_box'
            placeholder=' 변경할 비밀번호를 확인해주세요.' />
        </div>
        <button className='password_change_button'>변경하기</button>
      </ChangePassword>
    </>
  )
}

export default Changepassword
