import React, { useState } from 'react'
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

  const handleLicense = (e) => {

  }

  const handleExpiration = (e) => {
    console.log(e.target.value)
  }

  return (
    <>
      <ManageLicense>
        <h1 className='title'>자격증 관리 ＞</h1>
        <License />
        <h3 id='current'><span className='check'>&#10003;</span> 자격증 입력</h3>
        <div>
          <label
            htmlFor='new_license_name'
            className='new_license'>
            1) 자격증 종류
          </label>
          <input
            id='new_license_name'
            className='input_new_license'
            placeholder=' 자격증 종류를 입력해주세요.'
            onChange={(e) => handleLicense(e)} />
        </div>
        <div>
          <label className='new_license'>
            2) 자격증 만료 기간
          </label>
          <input
            type='date'
            className='input_new_license'
            placeholder=' 자격증의 만료 기간을 입력해주세요.'
            onChange={(e) => handleExpiration(e)} />
        </div>
        <button className='license_add_button'>추가하기</button>
      </ManageLicense>
    </>
  )
}

export default Managelicense