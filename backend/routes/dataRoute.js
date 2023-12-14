import express from "express";

import { protect } from '../middleWare/authMiddleware.js'
import { createData, getData } from "../controller/dataController.js";

const router = express.Router()

router.route('/').get(protect, getData).post(createData)

export default router
