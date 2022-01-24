const axios = require('axios')

const url ='https://api.odcloud.kr/api/15065220/v1/uddi:7afaf5ab-6e01-4de4-867a-a22c2a0271cd?page=1&perPage=100'
const servieKey = `ISrN4aQiOGIJ4rcBmciVlFlHjK9pHxRSGrXKFSkagzQmBh2mKGkccHfM29Pc6knRA6zo3SMoyMmr1iyeD9oZMw%3D%3D`;
const requestUrl = `${url}&serviceKey=${servieKey}&_returnType=json`

axios.get(requestUrl)

module.exports = async (req, res) => {
    axios.get(requestUrl).then(data => {
        if(!data){
            return res.status(400).json({data:'', message:'장학금 정보가 없습니다.'})
        }
        return res.status(200).json({data:data.data, message: '데이터를 받아왔습니다.'})
    }).catch(err=>{
        return res.status(500).send(err)
    })
    }