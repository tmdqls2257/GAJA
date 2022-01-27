import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import License from './License'

export const ManageLicense = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
`

export const Add = styled.div`
  display: flex;
  width: 100%;
  margin-left: 1.3rem;
  flex-direction: column;
`

function Managelicense({ accessToken, licenseList }) {
  const [licenseName, setLicenseName] = useState('')
  const [expiration, setExpiration] = useState('')

  const [submit, setSubmit] = useState(false)

  useEffect(() => {
    axios
      .post('https://localhost:4000/mypage/memo',
        {
          name: licenseName,
          expiration: expiration
        },
        {
          headers: { Authorization: `accessToken=${accessToken}` },
          'Content-Type': 'application/json',
          withCredentials: true
        }
      )
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submit])

  const handleLicense = (e) => {
    setLicenseName(e.target.value)
  }

  const handleExpiration = (e) => {
    setExpiration(e.target.value)
  }

  const handleSubmit = () => {
    setSubmit(true)
    axios
      .post('https://localhost:4000/mypage/memo',
        {
          name: licenseName,
          expiration: expiration
        },
        {
          headers: { Authorization: `accessToken=${accessToken}` },
          'Content-Type': 'application/json',
          withCredentials: true
        }
      )
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <ManageLicense>
        <h1 className='title'>자격증 관리 ＞</h1>
        <License licenseList={licenseList} />
        <h3 id='current'><span className='check'>&#10003;</span> 자격증 입력</h3>
        <Add>
          <div>
            <label
              htmlFor='new_license_name'
              className='new_license'
            >
              1) 자격증 종류
            </label>
            <input
              id='new_license_name'
              className='new_license_name'
              placeholder=' 자격증 종류를 입력해주세요.'
              onChange={(e) => handleLicense(e)}
            />
          </div>
          <div>
            <label className='new_license'>
              2) 자격증 만료 기간
            </label>
            <input
              type='date'
              className='new_license_expiration'
              placeholder=' 자격증의 만료 기간을 입력해주세요.'
              onChange={(e) => handleExpiration(e)}
            />
          </div>
        </Add>
        <button
          className='license_add_button'
          onClick={() => handleSubmit()}
        >
          추가하기
        </button>
      </ManageLicense>
    </>
  )
}

export default Managelicense
