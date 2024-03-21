import express from 'express'
import usersRouter from './routers/users.router.js'
import paymentsRouter from './routers/payments.router.js' 
import dotenv from 'dotenv'
dotenv.config()

export const app = express()

// app.get('/', (req, res) => res.send(`Ok, my secret  environment variable is ${process.env.SECRET}`))
app.use(express.static('./src/public'))
app.use('/users', usersRouter)
app.use('/payments', paymentsRouter)

app.listen(8080, () => console.log('Server Up!'))

