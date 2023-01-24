import pg from 'pg'
import * as queries from './queries.js'

const isProd = process.env.NODE_ENV === 'production'

const { PG_HOST, PG_PORT, PG_USERNAME, PG_PASSWORD, PG_DATABASE } = process.env

export const pool = new pg.Pool({
    host: PG_HOST,
    port: PG_PORT,
    user: PG_USERNAME,
    password: PG_PASSWORD,
    database: PG_DATABASE,
    ssl: isProd
})

// Parameters are expected to be passed as an array of primitives
export const executeQuery = async (query, parameters) => {
    const client = await pool.connect()
    try {
        const result = await client.query(query, parameters)
        return result
    } catch (error) {
        console.error(error.stack)
        error.name = 'dbError'
        throw error
    } finally {
        client.release()
    }
}

export const createProductTable = async () => {
    await executeQuery(queries.createProductTable)
    console.log('Product table initialized successfully.')
}

export default executeQuery