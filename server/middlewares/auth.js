const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
    // 요청헤더나 Query에서 토큰 값 추출 
    const token = req.headers['x-access-token'] || req.query.token

    // 토큰이 존재하지 않을 때 :: 401 Unauthorized 반환
    if (!token) {
        return res.status(401).end();
    }

    // 토큰을 복호화하는 Promise 생성
    const p = new Promise(
        (resolve, reject) => {
            jwt.verify(token, req.app.get('jwt-secret'), (err, decoded) => {
                if (err) reject(err)
                resolve(decoded)
            })
        }
    )

    // 인증에 실패했을 때 :: 403 Forbidden과 함께 error message 반환
    const onError = (error) => {
        res.status(403).json(error.message);
    }

    // Promise 사용
    p.then((decoded) => {
        req.decoded = decoded;
        next()
    }).catch(onError)
}

module.exports = authMiddleware