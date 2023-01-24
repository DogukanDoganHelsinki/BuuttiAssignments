import argon from 'argon2'

export const authenticate = async (req, res, next) => {
    // parse username and password from basic authentication headers
    const b64auth = req.headers.authorization ?? ''
    if (!b64auth.startsWith('Basic ')) {
        return res.status(401).send('Missing basic authentication headers')
    }
    const [username, password] = Buffer.from(b64auth.substring(6), 'base64').toString().split(':')

    // or you could just use
    // const { username, password } = req.body

    if (username !== process.env.SECRET_USER) {
        return res.status(401).send('Invalid username or password')
    }

    const isValidPassword = await argon.verify(process.env.SECRET_HASH, password)
    if (!isValidPassword) {
        return res.status(401).send('Invalid username or password')
    }

    next()
}