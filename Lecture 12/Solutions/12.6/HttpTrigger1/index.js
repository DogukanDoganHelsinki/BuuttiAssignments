module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.')

    const input = req.body?.input
    context.res = input 
        ? { status: 200, body: input.toUpperCase() }
        : { status: 400, body: 'Missing input' }
}