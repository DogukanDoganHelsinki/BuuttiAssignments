import express from 'express'

import { authenticate, validatePostRequest, validatePutRequest } from './middleware.js'

const router = express.Router()

let books = [
    { id: 1, name: 'Lord of the Rings', author: 'J.R.R. Tolkien', read: true },
    { id: 2, name: 'Moby Dick', author: 'Herman Melville', read: false },
    { id: 3, name: 'Sinuhe Egyptiläinen', author: 'Mika Waltari', read: true },
    { id: 4, name: 'Harry Potter', author: 'J.K. Rowling', read: false }
]

router.get('/', authenticate, (req, res) => {
    res.send(books)
})

router.get('/:id', authenticate, (req, res) => {
    const book = books.find(book => book.id === Number(req.params.id))
    book === null
        ? res.status(404).send()
        : res.send(book)
})

router.post('/', authenticate, validatePostRequest, (req, res) => {
    const { name, author, read } = req.body
    const id = books.reduce((acc, cur) => cur.id > acc ? cur.id : acc, 0) + 1
    const newBook = { id, name, author, read: !!read }
    books = books.concat(newBook)
    res.status(201).send()
})

router.put('/:id', authenticate, validatePutRequest, (req, res) => {
    const { id, name, author, read } = req.body
    const existingBook = books.find(book => book.id === id)
    if (existingBook === null) {
        return res.status(404).send()
    }
    const newBook = {
        ...existingBook,
        name: name ?? existingBook.name,
        author: author ?? existingBook.author,
        read: read ?? existingBook.read
    }

    books = books.map(book => book.id === id ? newBook : book)

    res.status(204).send()
})

router.delete('/:id', authenticate, (req, res) => {
    const newBooks = books.filter(book => book.id !== Number(req.params.id))
    if (newBooks.length === books.length) {
        return res.status(404).send()
    }
    books = newBooks
    res.status(204).send()
})

export default router