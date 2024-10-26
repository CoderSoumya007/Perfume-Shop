import asyncHandler from "../utils/asyncHandler.js"
import ProductService from "../Services/ProductService.js"

export const getProducts=asyncHandler(
    async(req,res)=>{
        const products=await ProductService.getAllProducts();
        res.status(200).json({success:true,count:products.length,data:products})
    }
)

export const getProduct=asyncHandler(
    async(req,res)=>{
        const id=req.params.productId;
        const product=await ProductService.getProductById(id);
        
        if(!product){
            return res.status(404).json({success:false,message:'Product not found'});
        }
        res.status(200).json({success:true,data:product})
    }
)
