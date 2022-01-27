import axios from 'axios'
import React from 'react'
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
  align-items: flex-start;
  justify-content: flex-start;
  line-height: 40px;
`

// props 로 License 리스트를 받아오면 map 메소드를 이용하여 나열하도록 한다.
function License ({ accessToken }) {
  const licenseList = []

  axios
    .get('https://localhost:4000/mypage/mypage',
      {
        headers: { Authorization: `accessToken=${accessToken}` },
        'Content-Type': 'application/json',
        withCredentials: true
      })
    .then((response) => {
      licenseList = response.data.data.license
    })
    .catch((error) => {
      console.log(error)
    })

  return (
    <>
      <Current>
        <div>
          <h3 id='current'><span className='check'>&#10003;</span> 자격증 보유 현황</h3>
          <List>
            <ul>
              {/* {licenseList.map((license) =>
                <li>
                  <span id='license_name'>license.name</span>
                  <span id='license_expiration'>license.expiration</span>
                </li>
              )} */}
              <li>
                <span id='license_name'>자격증</span>
                <span id='license_expiration'> 기간</span>
              </li>
              <li>
                <span id='license_name'>자격증</span>
                <span id='license_expiration'> 기간</span>
              </li>
              <li>
                <span id='license_name'>자격증</span>
                <span id='license_expiration'> 기간</span>
              </li>
            </ul>
          </List>
        </div>
      </Current>
    </>
  )
}

export default License
