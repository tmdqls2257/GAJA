const { Users } = require('../../models')
const { isAuthorized, checkRefeshToken, generateAccessToken, sendAccessToken } = require('../tokenFunctions');

module.exports = async(req, res) => {
  const accessTokenData = isAuthorized(req);
  
  console.log(accessTokenData);
  if(!accessTokenData){
    res.status(401).send({ message: '다시 시도해주십시오.' })
  }else{
    await Users.destroy({
      where:{
        email: accessTokenData.email
      }
    }).then(data => {
      if(!data){
        return res.status(200).json({ message: '회원탈퇴 성공했습니다' })
      }else{
        return res.status(400).json({ message: '회원탈퇴 실패하였습니다.' })
      }
    })
  }
}
