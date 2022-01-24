const url = 'https://oapi.saramin.co.kr/job-search?'
const request = require('request')
const axios = require('axios')

const accessKey = `C1yEPqDgx9EeCLYjhijJe0JnFXBXW8OzAyvOtTTLqAzUmcsXvC`;
const jobType = '11'
const requestUrl = `${url}access-key=${accessKey}&job_type=11`


module.exports = async (req, res) => {
    axios.get(requestUrl).then(data => {
        if(!data.data.jobs.job){
            return res.status(400).json({data:'',message:'인턴쉽 정보가 없습니다.'})
        }
        console.log(data.data.jobs.job);
        return res.status(200).json({data: data.data.jobs.job, message:'oks'})
    }).catch(err=>{
        return res.status(500).send(err)
    })
}