import express from "express"
import {getReviews,createReviews} from "../Controllers/reviewController.js"

const router=express.Router();

router
.route('/:productId')
.get(getReviews)
.post(createReviews);

export default router;