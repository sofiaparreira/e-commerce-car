const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Product = require('../models/Product')

const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const product = await Product.findAll()
        res.status(200).json(product)
    } catch (error) {
        console.error("Error fetching products", error);
        res.status(400).json({ error: "Error fetching products" })
    }
})

router.post("/add", async (req, res) => {
    try {
        const { model, brand, year, power, price, description, engine, image, quantity } = req.body;

        console.log("Received data:", req.body); 

        if (!model || !brand || !year || !power || !price || !description || !engine || !image || !quantity) {
            return res.status(400).json({ error: "Preencha todos os campos" })
        }

        const existingProduct = await Product.findOne({ where: { model: model } });
        if (existingProduct) {
            const newQuantity = existingProduct.quantity + quantity
            await Product.update(
                { quantity: newQuantity },
                { where: { id: existingProduct.id } }
            )
            return res.status(200).json({ message: "Updated stock quantity" })
        } else {
            const newProduct = await Product.create({
                model,
                brand,
                year,
                power,
                price,
                description,
                engine,
                image,
                quantity
            });
            res.status(201).json(newProduct) 
        }
    } catch (error) {
        console.error("Error adding product", error);
        return res.status(400).json({ error: "Error adding product" })
    }
});


module.exports = router;
