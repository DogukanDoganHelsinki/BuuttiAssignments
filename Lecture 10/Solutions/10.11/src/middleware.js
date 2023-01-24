import jwt from 'jsonwebtoken'

export const validatePostRequest = (req, res, next) => {
    const { name, author, read } = req.body

    if (!name || !author) {
        return res.status(400).send('Missing mandatory parameters: name, author')
    }

    if (read === undefined) {
        req.body.read = false
    }

    next()
}

export const validatePutRequest = (req, res, next) => {
    const { name, author, read } = req.body
    if (name === undefined && author === undefined && read === undefined) {
        return res.status(400).send('Missing mandatory parameter: "name", "author" or "read"')
    }

    if (name === '' || author === '') {
        return res.status(400).send('Parameter "name" or "author" can not be empty')
    }

    if (read === undefined) {
        req.body.read = false
    } else if (typeof read !== 'boolean') {
        return res.status(400).send('Type of "read" must be boolean')
    }

    const id = Number(req.params.id)
    if (Number.isNaN(id)) {
        return res.status(404).send()
    } else {
        req.body.id = id
    }

    next()
}

export const notFound = (_req, res) => {
    res.status(404).send('404 - Not Found')
}

export const logger = (req, _res, next) => {
    console.log(new Date(), req.method, req.url)
    if (Object.keys(req.body).length > 0) {
        console.log(req.body)
    }
    next()
}

export const authenticateUser = (req, res, next) => {
    const auth = req.get('Authorization')
    if (!auth?.startsWith('Bearer ')) {
        return res.status(401).send('Invalid token')
    }
    const token = auth.substring(7)
    const secret = process.env.SECRET
    try {
        const decodedToken = jwt.verify(token, secret)
        req.user = decodedToken
        next()
    } catch (error) {
        return res.status(401).send('Invalid token')
    }
}

export const authenticateAdmin = (req, res, next) => {
    req.user.isAdmin ? next() : res.status(401).send('Insufficient Privileges')
}

