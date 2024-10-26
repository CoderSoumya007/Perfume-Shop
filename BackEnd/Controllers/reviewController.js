import ReviewService from "../Services/ReviewService.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getReviews=asyncHandler(
    async (req,res)=>{
        const reviews=await ReviewService.getReviewByProductId(req.params.productId);
        res.status(200).json({success:true,count:reviews.length,data:reviews})
    }
)

export const createReviews=asyncHandler(
    async (req,res)=>{
        const body=req.body;        
        const review=await ReviewService.createReview(body)
        res.status(201).json({success:true,message:'Review Created Successfully',data:review});
    }
)