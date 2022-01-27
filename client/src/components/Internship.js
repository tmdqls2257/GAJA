import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Card from './Card'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
`

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
`

// {
//   "url": "http://www.saramin.co.kr/zf_user/jobs/relay/view?rec_idx=42189881&utm_source=job-search-api&utm_medium=api&utm_campaign=saramin-job-search-api",
//   "active": 1,
//   "company": {
//     "detail": {
//       "href": "http://www.saramin.co.kr/zf_user/company-info/view?csn=5908602335&utm_source=job-search-api&utm_medium=api&utm_campaign=saramin-job-search-api",
//       "name": "주식회사 윈트리"
//     }
//   },
//   "position": {
//     "title": "교육컨텐츠개발, 교육기획外 정규직/계약직 모집(경력사원)",
//     "industry": {
//       "code": "605",
//       "name": "전문·기능학원"
//     },
//     "location": {
//       "code": "106070",
//       "name": "부산 &gt; 부산진구"
//     },
//     "job-type": {
//       "code": "1,10,11,2,4",
//       "name": "정규직,계약직 (정규직 전환가능),인턴직 (정규직 전환가능),계약직,인턴직"
//     },
//     "job-mid-code": {
//       "code": "16,19",
//       "name": "기획·전략,교육"
//     },
//     "job-code": {
//       "code": "1627,1827,1828,1840,2205",
//       "name": "기능학원,자격증학원,교육기획,교육컨텐츠개발,교육컨텐츠기획,온라인교육,기획"
//     },
//     "experience-level": {
//       "code": 2,
//       "min": 3,
//       "max": 0,
//       "name": "경력3년↑"
//     },
//     "required-education-level": {
//       "code": "6",
//       "name": "고등학교졸업이상"
//     }
//   },
//   "keyword": "기능학원,자격증학원",
//   "salary": {
//     "code": "12",
//     "name": "3,000~3,200만원"
//   },
//   "id": "42189881",
//   "posting-timestamp": "1643174150",
//   "modification-timestamp": "1643174150",
//   "opening-timestamp": "1643173200",
//   "expiration-timestamp": "1648393199",
//   "close-type": {
//     "code": "1",
//     "name": "접수마감일"
//   }
// }

function Internship() {
  const [internshipData1, setIntershipData1] = useState([])
  const [internshipData2, setIntershipData2] = useState([])

  // ------------- timestamp 를 dateTime 으로 바꾸는 function 입니다 -------------
  const convertUnix = (timestamp) => {
    const time = new Date(timestamp * 1000)
    const year = time.getFullYear()
    const month = time.getMonth() + 1
    const date = time.getDate()
    return `${year}-${month}-${date}`
  }
  // ------------------------------------------------------------------------

  // ------------ timestamp 를 입력하면 D-Day를 반환하는 function 입니다 ------------
  // Number 타입이면서 unix 형태의 timestamp 를 넣어주셔야합니다!
  // 예를 들어, getDday(1648393199) 를 입력하면 59 가 출력이 됩니다.
  // 1648393199(Unix) <-> '2022-3-27'(Date) --> 오늘로부터 59일 남음!

  // const getDday = (timestamp) => {
  //   var time = new Date(timestamp * 1000);
  //   let year = time.getFullYear();
  //   let month = time.getMonth() + 1;
  //   let date = time.getDate();
  //   var Dday = new Date(year, month-1, date);
  //   var now = new Date();
  //   var gap = now.getTime() - Dday.getTime();
  //   var result = Math.floor(gap/(1000*60*60*24))*-1;
  //   return result;
  // }
  // -------------------------------------------------------------------------
  // let internshipData // 객체 {name, start, expiration}을 요소로 갖는 length 8의 배열

  useEffect(() => {
    axios
      .get('https://localhost:4000/page/internship')
      .then((res) => {
        const saraminData = res.data.data

        const internshipList1 = saraminData.slice(0, 4) // length가 4인 배열
        const data1 = internshipList1.map((internship) => { // length가 4인 배열
          return {
            name: internship.company.detail.name,
            start: convertUnix(Number(internship['opening-timestamp'])),
            expiration: convertUnix(Number(internship['expiration-timestamp']))
          }
        })
        const internshipList2 = saraminData.slice(4, 8) // length가 4인 배열
        const data2 = internshipList2.map((internship) => { // length가 4인 배열
          return {
            name: internship.company.detail.name,
            start: convertUnix(Number(internship['opening-timestamp'])),
            expiration: convertUnix(Number(internship['expiration-timestamp']))
          }
        })
        setIntershipData1(data1)
        setIntershipData2(data2)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  // let internshipList

  // axios
  //   .get('https://localhost:4000/page/internship')
  //   .then((res) => {
  //     let saraminData = res.data.data
  //     internshipList = saraminData.slice(0, 8)
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })

  // let internshipData = internshipList.map((internship) => {
  //   return {
  //     name: internship.company.detail.name,
  //     start: convertUnix(Number(internship['opening-timestamp'])),
  //     expiration: convertUnix(Number(internship['expiration-timestamp']))
  //   }
  // })

  return (
    <>
      <Container>
        <div>
          <Box>
            {internshipData1.map(el => <Card name={el.name} start={el.start} expiration={el.expiration} />)}
          </Box>
        </div>
        <div>
          <Box>
            {internshipData2.map(el => <Card name={el.name} start={el.start} expiration={el.expiration} />)}
          </Box>
        </div>
      </Container>
    </>
  )
}
export default Internship
