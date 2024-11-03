const express = require('express');
const ItemCart = require('../models/ItemCart');
const Product = require('../models/Product');   
const User = require('../models/User'); 

const router = express.Router();


router.post('/add', async (req,res) => {
    const { userId, productId, quantity, priceAll} = req.body
    
    try {
        const existingItem = await ItemCart.findOne({where: { userId, productId}})

        const product = await Product.findByPk(productId)
        if(!product){
            return res.status(404).json({error: 'Product not found'})
        }

        if(existingItem){
            existingItem.quantity +=  quantity
            existingItem.priceAll = existingItem.quantity * product.price
            await existingItem.save()
        } else {
            await ItemCart.create({
                userId,
                productId,
                quantity,
                priceAll: product.price * quantity
            })
        }
        res.status(201).json({message: "Item add sucessfully"})
    } catch (error) {
        console.error("Error adding product to cart", error)
        res.status(500).json({message: "Error adding product to cart"})

        
    }
})