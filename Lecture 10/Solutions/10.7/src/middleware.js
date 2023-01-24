import jwt from 'jsonwebtoken'

export const logger = (req, _res, next) => {
    console.log(new Date(), req.method, req.url)
    if (Object.keys(req.body).length > 0) {
        console.log(req.body)
    }
    next()
}

export const notFound = (req, res) => {
    res.status(404).send('404 - Endpoint not found')
}

export const authenticate = (req, res, next) => {
    const auth = req.get('Authorization')
    if (!auth?.startsWith('Bearer ')) {
        return res.status(401).send('Invalid or missing token')
    }

    const token = auth.substring(7)
    try {
        const decodedToken = jwt.verify(token, process.env.SECRET)
        req.user = decodedToken
        next()
    } catch (error) {
        return res.status(401).send('Invalid or missing token')
    }
}

export const admin = (req, res, next) => {
    req.user.isAdmin ? next() : res.status(401).send('Missing admin privileges')
}