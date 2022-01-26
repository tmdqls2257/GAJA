const axios = require('axios')

const url = 'https://api.odcloud.kr/api/15065220/v1/uddi:7afaf5ab-6e01-4de4-867a-a22c2a0271cd?page=1&perPage=100'
const requestUrl = `${url}&serviceKey=${process.env.SCHOLARSHIP_ACCESSKEY}&_returnType=json`

module.exports = async (req, res) => {
  axios.get(requestUrl).then(data => {
    if (!data) {
      return res.status(400).json({ data: '', message: '장학금 정보가 없습니다.' })
    }
    return res.status(200).json({ data: data.data, message: '데이터를 받아왔습니다.' })
  }).catch(err => {
    return res.status(500).send(err)
  })
}
