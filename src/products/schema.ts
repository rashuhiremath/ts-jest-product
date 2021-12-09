import mongoose from "mongoose"

interface Product {
    name: string,
    price: number
}

export const ProductSchema = new mongoose.Schema<Product>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
}, { timestamps: true })
