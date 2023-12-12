import express from 'express'
import {
  createGameHoneyRush,
  spinGameHoneyRush
} from '@/controllers/honey-rush.controller'

const router = express.Router()

router.get('/spin', createGameHoneyRush)
router.post('/create/spin', spinGameHoneyRush)

export default router
