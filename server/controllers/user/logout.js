const { isAuthorized, checkRefeshToken, generateAccessToken, sendAccessToken } = require('../tokenFunctions');
const { Users } = require('../../models');

module.exports = (req, res) => {
  const accessTokenData = isAuthorized(req);
  if (!accessTokenData) {
    if(req.cookies.refreshToken){
        const refreshTokenData = checkRefeshToken(req.cookies.refreshToken)
        const { email } = refreshTokenData;
        Users.findOne({ where: { email } })
            .then((data) => {
                delete data.dataValues.password
                const accessToken = generateAccessToken(data.dataValues)
                sendAccessToken(res, accessToken)
            })
            .catch((err) => {
                console.log(err);
            });
    }else{
        return res.send({data: null, message: '모든 토큰 만료 고객센터에 문의해주세요'})
    }
  }else{
  return res.cookie('refreshToken', '', {maxAge: 1}).send({data:null, message:'로그아웃'})
  }
};
