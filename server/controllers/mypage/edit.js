const { Users } = require('../../models')
const { isAuthorized } = require('../tokenFunctions')

module.exports = async (req, res) => {
  const accessTokenData = isAuthorized(req)
  console.log(accessTokenData)
  const id = accessTokenData.id

  const { userName, email, password } = req.body
  console.log(userName, email, password)
  const condition = {
    where: { id }
  }
  const options = { multi: true }

  await Users.update({
    userName, email, password
  }, condition, options).then(data => {
    console.log()
    if (data == 1) {
      return res.status(200).send({
        message: '정보가 변경되었습니다.'
      })
    } else {
      return res.status(400).send({
        message: '정보가 변경되지 않았습니다.'
      })
    }
  }).catch(err => {
    console.log(err)
    return res.status(500).send({
      message: 'Error updating UserInfo'
    })
  })
}
