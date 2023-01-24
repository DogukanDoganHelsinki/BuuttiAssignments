module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.')

    let min = Number(req.query.min)
    let max = Number(req.query.max)
    const allowFloat = req.query.float === 'true'

    if (Number.isNaN(min)) min = 0
    if (Number.isNaN(max)) max = 101

    const random = allowFloat ? randomFloat(min, max) : randomInt(min, max)

    context.res = {
        status: 200,
        body: { min, max, allowFloat, random }
    }
}

const randomInt = (min, max) => {
    const minInt = Math.ceil(min)
    const maxInt = Math.floor(max)
    return Math.floor(Math.random() * (maxInt - minInt)) + minInt
}

const randomFloat = (min, max) => {
    return Math.random() * (max - min) + min
}