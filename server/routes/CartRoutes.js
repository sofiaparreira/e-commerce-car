const express = require('express');
const ItemCart = require('../models/ItemCart');
const Product = require('../models/Product');
const User = require('../models/User');

const router = express.Router();

router.get('/:userId', async (req,res) => {
    const { userId } = req.params

    try {
        const user = await User.findByPk(userId)
        if(!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        const items = await ItemCart.findAll({
            where: { userId },
            include: {
                model: Product,
                attributes: ['id', 'model', 'brand', 'price', 'image']
            }
        })
        res.status(200).json(items)
    } catch (error) {
        console.error("Error fetching cart items: ", error)
        res.status(500).json({ message: 'Error fetching cart items' })
    }

})

router.post('/add', async (req, res) => {
    const { userId, productId, quantity } = req.body;

    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const product = await Product.findByPk(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        const existingItem = await ItemCart.findOne({ where: { userId, productId } });

        if (existingItem) {
            existingItem.quantity += quantity;
            existingItem.priceAll = existingItem.quantity * product.price;
            await existingItem.save();
        } else {
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

router.delete('/:userId/:productId/delete', async (req, res) => {
    const { userId, productId} = req.params

    try {
        const user = await User.findByPk(userId);
        if(!user) {
            return res.status(404).json({ error: 'User not found'})
        }

        const product = await ItemCart.findOne({ where: {userId, productId}})
        if(!product) {
            return res.status(404).json({error: "Item not found in cart"})
        }
        await product.destroy()
        res.status(200).json({message: "Item deleted successfully"})

    } catch (error) {
        console.error("Error deleting product from cart:", error);
        res.status(500).json({message: "Error removing item from cart"})
        
    }
})

router.put('/:userId/:productId/update', async (req, res) => {
    const { userId, productId } = req.params;
    const { quantity } = req.body; // Extrair quantity do corpo da requisição

    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const item = await ItemCart.findOne({ where: { userId, productId } }); // Alterar para productId
        if (!item) {
            return res.status(404).json({ error: 'Item not found in cart' });
        }

        // Atualizar a quantidade e o preço total
        item.quantity = quantity;
        const product = await Product.findByPk(productId); // Obter o produto para acessar o preço
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        
        item.priceAll = quantity * product.price; // Atualizar o preço total
        await item.save(); // Salvar as alterações

        res.status(200).json({ message: "Item updated successfully" });

    } catch (error) {
        console.error("Error updating item in cart: ", error);
        res.status(500).json({ message: 'Error updating item in cart' });
    }
});



module.exports = router;
