import Product from "../Models/Products.js"

class ProductService{
    
    async getAllProducts(){
        return await Product.find();
    }

    async getProductById(id){
        return await Product.findOne({ id });
    }
}

export default new ProductService();