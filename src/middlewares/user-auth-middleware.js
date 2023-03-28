const jwt = require('jsonwebtoken');

require('dotenv').config();

const userAuthToken = (req, res, next) => {

  const {access_token} = req.cookies;
  if (!access_token) {
    res.send({msg:"로그인 후 이용 가능합니다."});
  }
  let accessTokenInfo = verifyAccessToken(access_token);
  if (!accessTokenInfo) {
      res.send(
        "<script>alert('로그인이 만료 되었습니다.');location.href='/';</script>"
      );
    }
    accessTokenInfo = verifyAccessToken(access_token);
  req.tokenInfo = accessTokenInfo;
  next();
};

const verifyAccessToken = function (accessToken) {
  try {
    const { iat, exp, ...accessTokenInfo } = jwt.verify(
      accessToken,
      process.env.SECRET_KEY
    );
    return accessTokenInfo;
  } catch (error) {
    return false;
  }
};


module.exports = userAuthToken;
