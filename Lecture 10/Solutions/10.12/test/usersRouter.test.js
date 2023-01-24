import request from 'supertest'
import server from '../src/server.js'

beforeAll(async () => {
    await request(server)
        .post('/api/v1/users/register')
        .send({ username: 'testuser1', password: 'password1' })
})

describe('/api/v1/users/register', () => {
    it('returns a token on success', async () => {
        const response = await request(server)
            .post('/api/v1/users/register')
            .send({ username: 'testuser2', password: 'password2' })
        expect(response.statusCode).toBe(200)
        expect(response.body).toBeDefined()
    })

    it('does not allow to register admin', async () => {
        const response = await request(server)
            .post('/api/v1/users/register')
            .send({ username: 'admin', password: 'password2' })
        expect(response.statusCode).toBe(400)
    })

    it('does not allow duplicate usernames', async () => {
        const response = await request(server)
            .post('/api/v1/users/register')
            .send({ username: 'testuser1', password: 'password2' })
        expect(response.statusCode).toBe(400)
    })

    it('requires parameter username', async () => {
        const response = await request(server)
            .post('/api/v1/users/register')
            .send({ password: 'password2' })
        expect(response.statusCode).toBe(400)
    })

    it('requires parameter password', async () => {
        const response = await request(server)
            .post('/api/v1/users/register')
            .send({ username: 'testuser3' })
        expect(response.statusCode).toBe(400)
    })
})

describe('/api/v1/users/login', () => {

    it('returns token on valid credentials', async () => {
        const response = await request(server)
            .post('/api/v1/users/login')
            .send({ username: 'testuser1', password: 'password1' })
        expect(response.statusCode).toBe(200)
        expect(response.body).toBeDefined()
    })

    it('returns 401 on invalid username', async () => {
        const response = await request(server)
            .post('/api/v1/users/login')
            .send({ username: 'invalidusername', password: 'password1' })
        expect(response.statusCode).toBe(401)
    })

    it('returns 401 on invalid password', async () => {
        const response = await request(server)
            .post('/api/v1/users/login')
            .send({ username: 'testuser1', password: 'invalidpassword' })
        expect(response.statusCode).toBe(401)
    })

    it('requires parameter username', async () => {
        const response = await request(server)
            .post('/api/v1/users/login')
            .send({ password: 'password2' })
        expect(response.statusCode).toBe(400)
    })

    it('requires parameter password', async () => {
        const response = await request(server)
            .post('/api/v1/users/login')
            .send({ username: 'testuser3' })
        expect(response.statusCode).toBe(400)
    })
})