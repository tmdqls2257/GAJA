const { Users } = require('../../models')
const {
  generateAccessToken,
  generateRefreshToken,
  sendRefreshToken,
  sendAccessToken
} = require('../tokenFunctions')

module.exports = (req, res) => {
  const { email, password } = req.body
  if (!email || !password) { return res.status(422).send({ data: null, message: '모든 항목을 채워주세요' }) }
  Users.findOne({
    where: {
      email
    }
  })
    .then((data) => {
      console.log(data)
      if (!data) {
        return res.status(400).json({ data: null, message: '회원가입이 필요합니다.' })
      } else if (data.dataValues.password !== password) {
        return res.status(400).json({ data: null, message: '비밀번호를 확인해주세요' })
      }

      delete data.dataValues.password
      const accessToken = generateAccessToken(data.dataValues)
      const refreshToken = generateRefreshToken(data.dataValues)

      sendRefreshToken(res, refreshToken)
      sendAccessToken(res, accessToken)
    })
    .catch((err) => {
      console.log(err)
    })
}
