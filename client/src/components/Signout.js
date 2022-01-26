import React from 'react'
import styled from 'styled-components'

// export const Button = styled.div`

// `

function Signout({ accessToken }) {

  const handleSignout = () => {
    // 회원탈퇴 함수를 작성한다.
  }

  return (
    <>
      <h1 className='title'>회원탈퇴 ＞</h1>
      <button
        className='signout_button'
        onClick={() => handleSignout()}
      >
        회원탈퇴
      </button>
    </>
  )
}

export default Signout
