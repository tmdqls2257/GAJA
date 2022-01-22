const { User } = require('../../models')
const {
  generateAccessToken,
  generateRefreshToken,
  saveRefreshToken,
  sendAccessToken
} = require('../tokenFunctions')

module.exports = (req, res) => {
  const { email, password } = req.body
  User.findOne({
    where: {
      email
    }
  })
    .then((data) => {
      if (!data) {
        return res.status(400).send({ data: null, message: '회원가입이 필요합니다.' })
      } else if (data.dataValues.password !== password) {
        return res.status(400).send({ data: null, message: '비밀번호를 확인해주세요' })
      }

      delete data.dataValues.password
      const accessToken = generateAccessToken(data.dataValues)
      const refreshToken = generateRefreshToken(data.dataValues)

      saveRefreshToken(data.dataValues, refreshToken)
      sendAccessToken(res, accessToken)
    })
    .catch((err) => {
      console.log(err)
    })
}
