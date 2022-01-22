const { User } = require('../../models')

module.exports = (req, res) => {
  const {email, password} = req.body

  const delUser = User.findOne({
    where:{
      email, password
    }
  })
  if(delUser !== null){
    User.destroy({
      truncate: true,
    })
    return res.status(200).json({message: '안전하게 탈퇴처리되었습니다.'})
  }
}
