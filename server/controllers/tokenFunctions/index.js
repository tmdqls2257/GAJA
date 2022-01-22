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
  saveRefreshToken: (data, refreshToken) => {
    const email = data.email
    User.update({
      refreshToken: refreshToken
    }, {
      where: { email }
    })
  },
  sendAccessToken: (res, accessToken) => {
    res.cookie('accessToken', accessToken, {
      httpOnly: true
    })
      .status(200).send({ data: null, message: 'ok' })
  },
  resendAccessToken: (res, accessToken, data) => {
    res.json({ data: { accessToken, userInfo: data }, message: 'ok' })
  },
  isAuthorized: (req) => {
    const authorization = req.headers.authorization
    if (!authorization) {
      return null
    }
    const token = authorization.split(' ')[1]
    try {
      return verify(token, process.env.ACCESS_SECRET)
    } catch (err) {
      return null
    }
  },
  checkRefeshToken: (refreshToken) => {
    try {
      return verify(refreshToken, process.env.REFRESH_SECRET)
    } catch (err) {
      // return null if refresh token is not valid
      return null
    }
  }
}
