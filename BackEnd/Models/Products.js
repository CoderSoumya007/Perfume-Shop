import mongoose from "mongoose";

const sizeSchema = new mongoose.Schema({
    volume: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})
const ProductSchema = new mongoose.Schema({
    id: {
        type: String,
        required: [true,'Please add product id'],
        unique: true
    },
    name: {
        type: String,
        required: [true, 'Please add a product name'],
        trim: true,
        maxlength: [100, 'Name cannot be more than 100 characters']
    },
    brand: {
        type: String,
        required: [true, 'Please add a brand name'],
        trim: true,
        maxlength: [100, 'Name cannot be more than 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [500, 'Description cannot be more than 500 characters']
    },
    thumbnail:{
        type:String,
    },
    sizes: [sizeSchema],
    images: {
        main: {
            type: String,
            required: true
        },
        gallery: {
            type: [String],
            required: true
        }
    }
})
const Perfume = mongoose.model('perfumes', ProductSchema);
export default Perfume;