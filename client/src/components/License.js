import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'

export const Current = styled.div`
  /* display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 1rem;
  margin-left: -1rem; */
`

export const List = styled.div`
  display: flex;
  margin: auto;
  margin-left: 40px;
  margin-top: -20px;
  margin-bottom: 1.5rem;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: 40px;
`

// props 로 License 리스트를 받아오면 map 메소드를 이용하여 나열하도록 한다.
function License({ accessToken, licenseList }) {
  // const [licenseList, setLicenseList] = useState([])

  // useEffect(() => {
  //   axios
  //     .get('https://localhost:4000/mypage/mypage',
  //       {
  //         headers: { Authorization: `accessToken=${accessToken}` },
  //         'Content-Type': 'application/json',
  //         withCredentials: true
  //       })
  //     .then((response) => {
  //       setLicenseList(response.data.data.license)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  console.log(licenseList)

  return (
    <>
      <Current>
        <div>
          <h3 id='current'><span className='check'>&#10003;</span> 자격증 보유 현황</h3>
          <List>
            <ul>
              {Array.isArray(licenseList) ?
                licenseList.map((el, idx) => {
                  return (<li key={idx}>
                    <span id='license_name'> {el.name}</span>
                    <div id='license_expiration'> {el.expiration}</div>
                  </li>)
                }) : <span>자격증을 등록해주세요.</span>}
            </ul>
          </List>
        </div>
      </Current>
    </>
  )
}

export default License
