import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`

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

  let data;

  axios
    .get('https://localhost:4000/page/internship')
    .then((res) => {
      data = res.data.data
      console.log(data[0].company.detail.name)
    })

  return (
    <>
      <Container>
        <ul>
          <li>
            <h2></h2>
          </li>
        </ul>
      </Container>
    </>
  )
}

export default Internship
