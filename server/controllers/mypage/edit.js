const { Users } = require('../../models')
const { isAuthorized } = require('../tokenFunctions')

module.exports = async (req, res) => {
  const accessTokenData = isAuthorized(req)
  console.log(accessTokenData)
  const id = accessTokenData.id

  const { userName, email, password } = req.body
  console.log(userName, email, password)
  const condition = {
    where: { }
  }
  const options = { multi: true }

  await Users.update({
    userName, email, password
  }, condition, options).then(data => {
    console.log()
    if (data == 1) {
      return res.status(200).send({
        message: 'UserInfo was updated successfully.'
      })
    } else {
      return res.status(400).send({
        message: 'Data was not found or req.body is empty!'
      })
    }
  }).catch(err => {
    console.log(err)
    return res.status(500).send({
      message: 'Error updating UserInfo'
    })
  })
}
