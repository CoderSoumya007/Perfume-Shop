import mongoose from "mongoose";


const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: [true, 'Please add a rating between 1 and 5'],
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        required: [true, 'Please add a comment'],
        maxlength: [500, 'Comment cannot be more than 500 characters']
    },
    author: {
        type: String,
        required: [true, 'Please add an author name'],
        maxlength: [50, 'Author name cannot be more than 50 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const ReviewSchmena = new mongoose.Schema({
    productId: {
        type: String,
        required: [true, 'Please add a product ID'],
        unique: true
    },
    reviews: [reviewSchema]
});

const Reviews = mongoose.model("reviews", ReviewSchmena);
export default Reviews;

