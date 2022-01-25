import React from 'react'
import styled from 'styled-components'
import License from './License'

export const ManageLicense = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  /* align-items: flex-start; */
  /* justify-content: center; */
  flex-direction: column;
  /* margin-top: 120px; */
`

function Managelicense() {
  return (
    <>
      <ManageLicense>
        <h1 className='title'>자격증 관리 ＞</h1>
        <License />
        <h3 id='current'><span className='check'>&#10003;</span> 자격증 입력</h3>
        <div>
          <span className='new_license'>자격증 종류</span>
          <input className='input_new_license' placeholder=' 자격증을 입력해주세요.' />
        </div>
        <div>
          <span className='new_license'>자격증 만료 기간</span>
          <input className='input_new_license' placeholder=' 자격증의 만료 기간을 입력해주세요.' />
        </div>
        <button className='license_add_button'>추가하기</button>
      </ManageLicense>
    </>
  )
}

export default Managelicense