import 'dotenv/config'
import jwt from 'jsonwebtoken'

const secret = process.env.SECRET
const token = process.argv[2]

try {
    const decodedToken = jwt.verify(token, secret)
    console.log(decodedToken)
} catch (error) {
    console.log('Invalid token')
}
