import { Router } from "express";
import deliveryController from '../controllers/deliveryController.js'

const router = new Router()

router.get('/', deliveryController.index)
router.post('/', deliveryController.store)

export default router