import Reviews from "../Models/Reviews.js"

class ReviewService{
    async createReview(review){
        const { productId, reviews } = review;
        console.log("Review: ",reviews[0]);
        
         // Validate that reviews array has the required fields
         if (!reviews || reviews.length === 0 || !productId) {
            throw new Error("Invalid input data. Ensure 'productId' and 'reviews' array with required fields are provided.");
        }

         // Destructure fields from the first review object for validation
         const { rating, comment, author } = reviews[0];
         if (rating === undefined || !comment || !author) {
             throw new Error("Each review must have 'rating', 'comment', and 'author'.");
         }

         // Check if a product with the given productId exists
        const existingProduct = await Reviews.findOne({ productId });

        console.log(existingProduct);
        

        if(existingProduct){
            existingProduct.reviews.push({rating,comment,author,createdAt:new Date()});
            await existingProduct.save();
            return existingProduct;
        }else{
            const newProduct = await Reviews.create({
                productId,
                reviews:[
                    {rating,comment,author,createdAt:new Date()}
                ]
            })
            return newProduct;
        }
    }

    async getReviewByProductId(productId){
        return await Reviews.find({productId})
    }
}

export default new ReviewService();