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