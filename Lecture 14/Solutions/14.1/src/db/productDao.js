import { v4 as uuidv4 } from 'uuid'
import executeQuery from './db.js'
import * as queries from './queries.js'

const insertProduct = async (product) => {
    const id = uuidv4()
    const params = [id, ...Object.values(product)]
    console.log(`Inserting a new product ${params[0]}...`)
    const result = await executeQuery(queries.insertProduct, params)
    console.log(`New product ${id} inserted successfully.`)
    return result
}

const updateProduct = async (product) => {
    const params = [product.name, product.price, product.id]
    console.log(`Updating a product ${params[0]}...`)
    const result = await executeQuery(queries.updateProduct, params)
    console.log(`Product ${product.id} updated successfully.`)
    return result
}

const findAll = async () => {
    console.log('Requesting for all products...')
    const result = await executeQuery(queries.findAll)
    console.log(`Found ${result.rows.length} products.`)
    return result
}

const findOne = async (id) => {
    console.log(`Requesting a product with id: ${id}...`)
    const result = await executeQuery(queries.findOne, [id])
    console.log(`Found ${result.rows.length} products.`)
    return result
}

const deleteById = async (id) => {
    console.log(`Deleting product with id: ${id}`)
    const params = [id]
    const result = await executeQuery(queries.deleteById, params)
    return result
}

export default { insertProduct, findAll, findOne, updateProduct, deleteById }