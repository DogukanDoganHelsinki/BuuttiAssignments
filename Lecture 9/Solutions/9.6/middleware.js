export const logger = (req, _res, next) => {
    console.log(new Date(), req.method, req.url)
    next()
}

export const notFound = (req, res) => {
    res.status(404).send('404 - Endpoint not found')
}