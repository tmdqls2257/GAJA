const {
  isAuthorized,
  checkRefeshToken,
  generateAccessToken,
  resendAccessToken
} = require('../tokenFunctions')
const { User, license } = require('../../models')

module.exports = async (req, res) => {
  const accessTokenData = isAuthorized(req)
  if (!accessTokenData) {
    if (req.cookies.refreshToken) {
      const refreshTokenData = checkRefeshToken(req.cookies.refreshToken)
      const { email } = refreshTokenData
      User.findOne({ where: { email } })
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
    const { id } = req.body
    const userId = accessTokenData.id

    license.destroy({
      where: {
        id: id,
        userId: userId
      }
    }).then(data => {
      User.findOne({ where: { email: accessTokenData.email } })
        .then((userData) => {
          delete userData.dataValues.password
          license.findAll({ where: { userId: accessTokenData.id } })
            .then((licenseData) => {
              if (!data) {
                return res.send({ data: { userInfo: userData, license: licenseData }, message: '삭제 실패(없는정보)' })
              } else {
                return res.send({ data: { userInfo: userData, license: licenseData }, message: '삭제 성공' })
              }
            })
        })
    })
  }
}
