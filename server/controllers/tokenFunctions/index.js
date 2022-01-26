require('dotenv').config()
const { sign, verify } = require('jsonwebtoken')
const { User } = require('../../models')

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: '1h' })
  },
  generateRefreshToken: (data) => {
    return sign(data, process.env.REFRESH_SECRET, { expiresIn: '30d' })
  },
  sendRefreshToken: (res, refreshToken) => {
    return res.cookie('refreshToken', refreshToken, {
      httpOnly: true
    })
  },
  sendAccessToken: (res, accessToken) => {
    return res.json({ data: { accessToken }, message: 'ok' })
  },
  resendAccessToken: (res, accessToken, data) => {
    return res.send({ data: { accessToken, userInfo: data }, message: 'accessToken이 만료되어 다시 발급했습니다. 다시 시도해주세요.' })
  },
  isAuthorized: (req) => {
    const authorization = req.headers.authorization
    const token = authorization.split('=')[1]
    try {
      return verify(token, process.env.ACCESS_SECRET)
    } catch (err) {
      console.log(err)
    }
  },
  checkRefeshToken: (refreshToken) => {
    try {
      return verify(refreshToken, process.env.REFRESH_SECRET)
    } catch (err) {
      return null
    }
  }
}
