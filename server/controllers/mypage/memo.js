const { isAuthorized, 
    checkRefeshToken, 
    generateAccessToken, 
    resendAccessToken } = require('../tokenFunctions');
const { User, license } = require('../../models');

module.exports = async (req, res) => {

  const accessTokenData = isAuthorized(req);
  if (!accessTokenData) {
    if(req.cookies.refreshToken){
        const refreshTokenData = checkRefeshToken(req.cookies.refreshToken)
        const { email } = refreshTokenData;
        User.findOne({ where: { email } })
            .then((data) => {
                delete data.dataValues.password
                const accessToken = generateAccessToken(data.dataValues)
                resendAccessToken(res, accessToken, data)
            })
            .catch((err) => {
                console.log(err);
            });
    }else{
        return res.send({data: null, message: '모든 토큰 만료 고객센터에 문의해주세요'})
    }
  }else{
    const { name, expiration } = req.body
    if(!name || !expiration){ return res.status(422).send({data:null, message:'모든 항목을 채워주세요'})}
    const { email } = accessTokenData;

    User.findOne({ where: { email } })
        .then((data) => {
            delete data.dataValues.password
            const userId = data.dataValues.id
            license.findAll({ where: {userId} })
                .then((licenseData) => {
                    for(let i=0; i<licenseData.length; i++){
                        if(licenseData[i].name === name){
                            return res.status(422).send({data:{userInfo: data,license: licenseData}, maessage:'이미 등록되어있습니다.'})
                        }
                    }
                    license.create({
                        name,
                        expiration,
                        userId,
                    })

                    license.findAll({ where: {userId} })
                        .then((licenseData) => {
                            return res.status(201).send({data: {userInfo: data, license: licenseData}, message: '등록 완료'})
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                })
                .catch((err) => {
                    console.log(err);
                });
        })
        .catch((err) => {
            console.log(err);
        });
  }
}