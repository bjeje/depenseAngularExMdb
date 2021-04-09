const env = require('../constants/env');
const jwt = require('jsonwebtoken');

const extractBearerToken = headerValue => {
    if (typeof headerValue !== 'string') {
        return false
    }

    const matches = headerValue.match(/(bearer)\s+(\S+)/i)
    return matches && matches[2]
}

module.exports.checkTokenMiddleware = (req, res, next) => {
    // get token
    const token = req.headers.authorization && extractBearerToken(req.headers.authorization)

    if (!token) {
        return res.status(401).json({ message: 'Error. Need a token' })
    }

    // verify token
    jwt.verify(token, env.TOKEN_SECRET, (err, decodedToken) => {
        if (err) {
            res.status(401).json({ message: 'Error. Bad token' })
        } else {
            return next()
        }
    })
}
