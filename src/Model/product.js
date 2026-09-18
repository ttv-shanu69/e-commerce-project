import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    _id: Number,
    name: String, 
    price: Number,
    description: String,
})

export default mongoose.models.Product || mongoose.model("Product", ProductSchema); 