import express from 'express'
import usersRouter from './routers/users.router.js'

export const app = express()

app.get('/', (req, res) => res.send('ok'))
app.use('/users', usersRouter)


app.listen(8080, () => console.log('Server Up!'))

