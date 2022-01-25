const url = 'https://oapi.saramin.co.kr/job-search?'
const axios = require('axios')
const requestUrl = `${url}access-key=${process.env.INTETNSHIP_ACCESSKEY}&job_type=11`


module.exports = async (req, res) => {
    axios.get(requestUrl,{headers:{'Accept':'application/json'}}).then(data => {
        if(!data.data.jobs.job){
            return res.status(400).json({data:'',message:'인턴쉽 정보가 없습니다.'})
        }
        return res.status(200).json({data: data.data.jobs.job, message:'oks'})
    }).catch(err=>{
        return res.status(500).send(err)
    })
}