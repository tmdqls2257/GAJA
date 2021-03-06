import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Card from './Card'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -1.2rem;
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

function Scholarship() {
  const [scholarshipData1, setScholarshipData1] = useState([])
  const [scholarshipData2, setScholarshipData2] = useState([])

  // ------------ date 를 입력하면 D-Day를 반환하는 function 입니다 ------------
  // date 는 String 타입으로 넣어주셔야 합니다! (예: '2022-01-31')
  const getDday = (dateTime) => {
    var convert = dateTime.split('-');
    var year = Number(convert[0])
    var month = Number(convert[1])
    var date = Number(convert[2])
    var Dday = new Date(year, month - 1, date);
    var now = new Date();
    var gap = now.getTime() - Dday.getTime();
    var result = Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;
    return result;
  }
  // -------------------------------------------------------------------------
  // let scholarshipData // 객체 {name, start, expiration}을 요소로 갖는 length 8의 배열

  useEffect(() => {
    axios
      .get('https://localhost:4000/page/scholarship')
      .then((res) => {
        const saraminData = res.data.data.data

        const scholarshipList1 = saraminData.slice(0, 4) // length가 8인 배열
        const data1 = scholarshipList1.map((scholarship) => { // length가 8인 배열
          return {
            name: scholarship.장학사업명,
            start: scholarship.신청시작일자,
            expiration: scholarship.신청종료일자,
            day: getDday(scholarship.신청종료일자)
          }
        })
        const scholarshipList2 = saraminData.slice(4, 8) // length가 8인 배열
        const data2 = scholarshipList2.map((scholarship) => { // length가 8인 배열
          return {
            name: scholarship.장학사업명,
            start: scholarship.신청시작일자,
            expiration: scholarship.신청종료일자,
            day: getDday(scholarship.신청종료일자)
          }
        })
        setScholarshipData1(data1)
        setScholarshipData2(data2)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <Container>
        <div>
          <Box>
            {scholarshipData1.map((el) =>
              <Card name={el.name}
                start={el.start}
                expiration={el.expiration}
                day={el.day * -1}
                symbol={'+'} />)}
          </Box>
        </div>
        <div>
          <Box>
            {scholarshipData2.map((el) =>
              <Card name={el.name}
                start={el.start}
                expiration={el.expiration}
                day={el.day * -1}
                symbol={'+'} />)}
          </Box>
        </div>
      </Container>
    </>
  )
}
export default Scholarship
