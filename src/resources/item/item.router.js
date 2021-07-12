import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  return res.send('ok')
})

router.post('/', (req, res) => {
  return res.send(req.body)
})

router.get('/:id', (req, res) => {
  return res.send('ok')
})

router.put('/:id', (req, res) => {
  return res.send(req.body)
})

router.delete('/:id', (req, res) => {
  return res.send('ok')
})

export default router
