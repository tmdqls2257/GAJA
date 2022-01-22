require('dotenv').config()
const fs = require('fs')
const https = require('https')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()

const userRoute = require('./routes/user.js')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
  })
)
app.use(cookieParser())
// app.post("/login", controllers.login);       //로그인
// app.post("/logout", controllers.logout);     //로그아웃
app.use('/user', userRoute) // 회원가입
// app.post('/memo', controllers.memo);         //메모
// app.post('/bookmark', controllers.bookmark); //즐겨찾기
// app.get('/internship',controllers.internship); //인턴십
// app.get('/scholarship',controllers.scholarship);//장학금
// app.get('/mypage',controllers.mypage);

// app.get("/accesstokenrequest", controllers.accessTokenRequest);
// app.get("/refreshtokenrequest", controllers.refreshTokenRequest);

const HTTPS_PORT = process.env.HTTPS_PORT || 4000

let server
if (fs.existsSync('./key.pem') && fs.existsSync('./cert.pem')) {
  const privateKey = fs.readFileSync(__dirname + '/key.pem', 'utf8')
  const certificate = fs.readFileSync(__dirname + '/cert.pem', 'utf8')
  const credentials = { key: privateKey, cert: certificate }

  server = https.createServer(credentials, app)
  server.listen(HTTPS_PORT, () => console.log('server runnning'))
} else {
  server = app.listen(HTTPS_PORT)
}
module.exports = server
