import express from 'express'

export const app = express()

app.get('/', (req, res) => res.send('ok'))


app.listen(8080, () => console.log('Server Up!'))

