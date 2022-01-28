import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import Modal from './Modal'

export const ChangePassword = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

function Changepassword({ accessToken }) {
  const [openModal, setOpenModal] = useState(false)
  const [modalText, setModalText] = useState('')
  const [email, setEmail] = useState('')

  const [original, setOriginal] = useState('')
  const [change, setChange] = useState('')
  const [check, setCheck] = useState('')

  const [oriCorrect, setOriCorrect] = useState(true)
  const [chgCorrect, setChgCorrect] = useState(true)
  const [chkCorrect, setChkCorrect] = useState(true)

  const [getData, setGetData] = useState(false)

  // 마이페이지를 통해 state 에 email 을 저장
  useEffect(() => {
    axios
      .get('https://localhost:4000/mypage/mypage', {
        headers: {
          Authorization: `accessToken=${accessToken}`,
          'Content-Type': 'application/json'
        },
        withCredentials: true
      })
      .then((response) => {
        setEmail(response.data.data.userInfo.email)
      })
      .catch((error) => {
        console.log(error)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
    axios
      .post('https://localhost:4000/user/login',
        {
          email: email,
          password: original
        },
        { 'Content-Type': 'application/json', withCredentials: true }
      )
      .then((res) => {
        if (res.message === '비밀번호를 확인해주세요') {
          setOriCorrect(false)
        } else {
          setOriCorrect(true)
        }
      })
      .catch((error) => {
        console.log(error)
      })

    axios
      .post('https://localhost:4000/mypage/mypage/1',
        {
          password: change
        },
        {
          headers: { Authorization: `accessToken=${accessToken}` },
          'Content-Type': 'application/json',
          withCredentials: true
        })
      .catch((error) => {
        console.log(error)
      })

    // if (original !== testPassword) { setOriCorrect(false) } else { setOriCorrect(true) }
    if (change === original) { setChgCorrect(false) } else { setChgCorrect(true) }
    if (check !== change) { setChkCorrect(false) } else { setChkCorrect(true) }

    if (oriCorrect && chgCorrect && chkCorrect) {
      setModalText('비밀번호가 변경되었습니다.')
      setOpenModal(true)
    }
  }

  return (
    <>
      {openModal ? <Modal setOpenModal={setOpenModal} modalText={modalText} /> : null}
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
