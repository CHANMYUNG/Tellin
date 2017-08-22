const jwt = require('jsonwebtoken')
const User = require('../../database/models/user')
exports.register = (req, res) => {
    const {
        email,
        nickname,
        password
    } = req.body;

    let newUser = null;

    const findOneByNickname = (user) => {
        if (user) {
            throw new Error('email exists');
        } else {
            return User.findOneByNickname(code);
        }
    }

    const create = (user) => {
        if (user) {
            throw new Error('nickname exists');
        } else {
            return User.create(email, password, nickname);
        }
    }

    const respond = (user) => {
        res.sendStatus(201);
    }

    const onError = (error) => {
        res.status(409).json({
            message: error.message
        });
    }

    User.findOneByEmail(email).then(findOneByNickname).then(create).then(respond).catch(onError);
}

exports.login = (req, res) => {
    const {
        username,
        password
    } = req.body;

    const secret = req.app.get('jwt-secret')

    // check the user info & generate the jwt
    // check the user info & generate the jwt
    const check = (user) => {

        if (!user) {
            // user does not exist
            throw new Error('login failed')
        } else {
            // user exists, check the password
            if (user.verify(password)) {
                // create a promise that generates jwt asynchronously
                const p = new Promise((resolve, reject) => {
                    jwt.sign({
                            _id: user._id,
                            username: user.username,
                        },
                        secret, {
                            expiresIn: '7d',
                            issuer: "nooheat.com",
                            subject: 'userInfo'
                        }, (err, token) => {
                            if (err) reject(err)
                            resolve(token)
                        })
                })
                return p
            } else {
                throw new Error('login failed')
            }
        }
    }

    // respond the token 
    const respond = (token) => {
        res.json({
            message: 'logged in successfully',
            token
        })
    }

    // error occured
    const onError = (error) => {
        res.status(400).json({
            message: error.message
        })
    }

    // find the user
    User.findOneByUsername(username)
        .then(check)
        .then(respond)
        .catch(onError)

}