import React, { useState } from 'react'
import styled from 'styled-components'

export const ChangePassword = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

function Changepassword ({ accessToken }) {
  const [original, setOriginal] = useState('')
  const [change, setChange] = useState('')
  const [check, setCheck] = useState('')

  const [oriCorrect, setOriCorrect] = useState(true)
  const [chgCorrect, setChgCorrect] = useState(true)
  const [chkCorrect, setChkCorrect] = useState(true)

  const testPassword = '1234'

  const handleOriginal = (e) => {
    setOriginal(e.target.value)
  }

  const handleChange = (e) => {
    setChange(e.target.value)
  }

  const handleCheck = (e) => {
    setCheck(e.target.value)
  }

  const changePassword = () => {
    // 비밀번호 변경 호출 함수
    // 기존 비밀번호와 유저의 비밀번호가 일치하는지,
    // 변경 비밀번호와 비밀번호 확인이 일치하는지 검토하고
    // 모든 정보가 일치하면 비밀번호를 변경하도록 한다.
    // 비밀번호는 4자리 이상, 20자리 이하로 입력해야한다.
    if (original !== testPassword) { setOriCorrect(false) } else { setOriCorrect(true) }
    if (change === testPassword) { setChgCorrect(false) } else { setChgCorrect(true) }
    if (check !== change) { setChkCorrect(false) } else { setChkCorrect(true) }
  }

  return (
    <>
      <ChangePassword>
        <h1 className='title'>비밀번호 변경 ＞</h1>
        <div>
          <label htmlFor='password_original'>
            기존 비밀번호 입력
          </label>
          <input
            type='password'
            id='password_original'
            className='password_box'
            placeholder=' 기존 비밀번호를 입력해주세요.'
            onChange={(e) => handleOriginal(e)}
          />
          <br />
          {oriCorrect
            ? <span />
            : <span className='wrong_1'>&#10005; 비밀번호가 일치하지 않습니다.</span>}
        </div>
        <div>
          <label htmlFor='password_change'>
            변경 비밀번호 입력
          </label>
          <input
            type='password'
            id='password_change'
            className='password_box'
            placeholder=' 비밀번호는 4자 이상 20자 이하입니다.'
            onChange={(e) => handleChange(e)}
          />
          <br />
          {chgCorrect
            ? <span />
            : <span className='wrong_2'>&#10005; 기존 비밀번호와 동일합니다.</span>}
        </div>
        <div>
          <label htmlFor='password_check'>
            변경 비밀번호 확인
          </label>
          <input
            type='password'
            id='password_check'
            className='password_box'
            placeholder=' 변경할 비밀번호를 확인해주세요.'
            onChange={(e) => handleCheck(e)}
          />
          <br />
          {chkCorrect
            ? <span />
            : <span className='wrong_3'>&#10005; 비밀번호를 다시 한 번 확인해주세요.</span>}
        </div>
        <button
          className='password_change_button'
          onClick={() => changePassword()}
        >
          변경하기
        </button>
      </ChangePassword>
    </>
  )
}

export default Changepassword
