import express from 'express'
import { test } from '../controllers/appController.js'
const router = express.Router()

router.get('/', test)




export default router