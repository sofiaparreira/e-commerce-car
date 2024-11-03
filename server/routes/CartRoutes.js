const express = require('express');
const ItemCart = require('../models/ItemCart');
const Product = require('../models/Product');
const User = require('../models/User');

const router = express.Router();

router.post('/add', async (req, res) => {
    const { userId, productId, quantity } = req.body;

    try {
        // Verificar se o usuário existe
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Verificar se o produto existe
        const product = await Product.findByPk(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Checar se o item já está no carrinho
        const existingItem = await ItemCart.findOne({ where: { userId, productId } });

        if (existingItem) {
            // Atualizar quantidade e preço total
            existingItem.quantity += quantity;
            existingItem.priceAll = existingItem.quantity * product.price;
            await existingItem.save();
        } else {
            // Criar novo item no carrinho
            await ItemCart.create({
                userId,
                productId,
                quantity,
                priceAll: product.price * quantity
            });
        }

        res.status(201).json({ message: "Item added successfully" });
    } catch (error) {
        console.error("Error adding product to cart:", error);
        res.status(500).json({ message: "Error adding product to cart" });
    }
});


module.exports = router;
