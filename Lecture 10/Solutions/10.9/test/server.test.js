import request from 'supertest'
import server from '../src/server.js'

beforeAll(async () => {
    await request(server)
        .post('/user/register')
        .send({ username: 'testuser1', password: 'password1' })
})

describe('/user/register', () => {
    it('returns token', async () => {
        const response = await request(server)
            .post('/user/register')
            .send({ username: 'testuser2', password: 'password2' })
        expect(response.statusCode).toBe(200)
        expect(response.body).toBeDefined()
    })
})

describe('/user/login', () => {
    it('returns 401 on invalid username', async () => {
        const response = await request(server)
            .post('/user/login')
            .send({ username: 'invalidusername', password: 'password1' })
        expect(response.statusCode).toBe(401)
    })

    it('returns 401 on invalid password', async () => {
        const response = await request(server)
            .post('/user/login')
            .send({ username: 'testuser1', password: 'invalidpassword' })
        expect(response.statusCode).toBe(401)
    })

    it('returns token on valid credentials', async () => {
        const response = await request(server)
            .post('/user/login')
            .send({ username: 'testuser1', password: 'password1' })
        expect(response.statusCode).toBe(200)
        expect(response.body).toBeDefined()
    })
})