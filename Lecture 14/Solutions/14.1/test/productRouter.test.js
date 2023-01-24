import { jest } from '@jest/globals'
import request from 'supertest'
import server from '../src/api/server.js'
import { pool } from '../src/db/db.js'

const initializeDbMock = (expectedResponse) => {
    pool.connect = jest.fn(() => {
        return {
            query: () => expectedResponse,
            release: () => null
        }
    })
}



describe('Testing POST /products', () => {

    const mockResponse = {
        rowCount: 1,
        rows: [{ id: 12345 }]
    }

    beforeAll(() => {
        initializeDbMock(mockResponse)
    })

    afterAll(() => {
        jest.clearAllMocks()
    })

    it('Returns 200 with valid new product', async () => {
        const response = await request(server)
            .post('/products')
            .send({ name: 'testproduct', price: 1234 })
            .set('Content-Type', 'application/json')
        expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ id: 12345, name: 'testproduct', price: 1234 }))
    })
})

describe('Testing GET /products', () => {

    const mockResponse = {
        rows: [
            { id: '12345', name: 'koira', price: 1234 },
            { id: '54321', name: 'kissa', price: 4321 }
        ]
    }

    beforeAll(() => {
        initializeDbMock(mockResponse)
    })

    afterAll(() => {
        jest.clearAllMocks()
    })

    it('Returns 200 with all the products', async () => {
        const response = await request(server)
            .get('/products')
            .set('Content-Type', 'application/json')
        expect(response.status).toBe(200)
        expect(JSON.parse(response.text)).toStrictEqual(mockResponse.rows)
    })
})

describe('Testing GET /products/id', () => {

    it('Returns 200 with a single product', async () => {
        const mockResponse = {
            rowCount: 1,
            rows: [
                { id: '12345', name: 'koira', price: 1234 }
            ]
        }
        initializeDbMock(mockResponse)
        const response = await request(server)
            .get('/products/12345')
            .set('Content-Type', 'application/json')
        expect(response.status).toBe(200)
        expect(JSON.parse(response.text)).toStrictEqual(mockResponse.rows[0])
    })
})