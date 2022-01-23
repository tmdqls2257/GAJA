const { Users } = require('../../models')
// const { generateAccessToken, sendAccessToken } = require('../tokenFunctions')

module.exports = async (req, res) => {
  // TODO: 회원가입 및 사용자 생성 로직을 작성하세요.
  const { userName, email, password } = req.body

  if (!userName || !email || !password) {
    console.log(username, email, password)
    return res.status(422).send('insufficient parameters supplied')
  }

  const found = await Users.findOne({ where: { email } })

  if (found) {
    return res.status(400).json({ message: `${email} already exsits` })
  }

  const user = await Users.create({
    userName,
    email,
    password
  })
  return res.status(201).json({ user })
}
