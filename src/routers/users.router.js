import { Router } from 'express'

const router = Router()
const users = [
    { id: 1, name: 'Alex', age: 46, status: true },
    { id: 2, name: 'Batman', age: 34, status: false },
    { id: 3, name: 'Aquaman', age: 29, status: true }
]

router.get('/', (req, res) => {
    res.json({ status: 'success', payload: users })
})

export default router