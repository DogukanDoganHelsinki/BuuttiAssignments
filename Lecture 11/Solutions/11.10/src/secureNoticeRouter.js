import express from 'express'

let notices = []

const router = express.Router()

router.get('/', (_req, res) => {
    res.send(notices)
})

router.post('/', (req, res) => {
    const notice = req.body?.notice ?? ''
    notices = notices.concat(notice)
    res.send()
})

router.delete('/:index', (req, res) => {
    const index = Number(req.params.index)
    notices = notices.filter((_notice, i) => i !== index)
    res.send()
})
export default router