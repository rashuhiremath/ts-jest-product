import express from "express"
import { ProductModel } from "./model.js"

const productsRouter = express.Router()

productsRouter
    .get('/', async (req, res) => {
        const products = await ProductModel.find({})
        res.send(products)
    })
    .post("/", async (req, res) => {
        const product = new ProductModel(req.body)
        await product.save()
        res.status(201).send(product)
    })

    productsRouter
    .get('/:id', async (req, res) => {
        const products = await ProductModel.findById(req.params.id)
        if(products){
            res.status(200).send({products})
        }else{
            res.status(404).send("product not found")
        }
      
    })
    .put('/:id', async (req, res) => {
        const products = await ProductModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(products){
            res.status(201).send({products})
        }else{
            res.status(404).send("product not found")
        }
    })
    .delete('/:id', async (req, res) => {
        const products = await ProductModel.findByIdAndDelete(req.params.id)
        if(products){
            res.status(204).send({})
        }else{
            res.status(404).send("product not found")
        }
    
    })

export default productsRouter