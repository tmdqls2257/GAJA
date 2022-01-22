const { User } = require('../../models')
// const { generateAccessToken, sendAccessToken } = require('../tokenFunctions')

module.exports = async (req, res) => {
  // TODO: 회원가입 및 사용자 생성 로직을 작성하세요.
  const { username, email, password } = req.body

  if (!username || !email || !password) {
    return res.status(422).send('insufficient parameters supplied')
  }

  const found = await User.findOne({ where: { email } })

  if (found) {
    return res.status(409).json({ message: `${email} already exsits` })
  }

  const user = await User.create({
    username,
    email,
    password
  })
  return res.status(201).json({ user })
}
