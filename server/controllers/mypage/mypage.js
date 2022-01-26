const {
  isAuthorized,
  checkRefeshToken,
  generateAccessToken,
  resendAccessToken
} = require('../tokenFunctions')
const { Users, license } = require('../../models')

module.exports = (req, res) => {
  const accessTokenData = isAuthorized(req)
  if (!accessTokenData) {
    if (req.cookies.refreshToken) {
      const refreshTokenData = checkRefeshToken(req.cookies.refreshToken)
      const { email } = refreshTokenData
      Users.findOne({ where: { email } })
        .then((data) => {
          delete data.dataValues.password
          const accessToken = generateAccessToken(data.dataValues)
          resendAccessToken(res, accessToken, data)
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      return res.send({ data: null, message: '모든 토큰 만료 고객센터에 문의해주세요' })
    }
  } else {
    const { email } = accessTokenData
    Users.findOne({ where: { email } })
      .then((userData) => {
        delete userData.dataValues.password
        license.findAll({ where: { userId: userData.dataValues.id } })
          .then((licenseData) => {
            return res.send({ data: { userInfo: userData, license: licenseData }, message: '마이페이지' })
          })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
