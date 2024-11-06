const express = require('express');
const ItemCart = require('../models/ItemCart');
const Product = require('../models/Product');
const User = require('../models/');
const Order = require('../models/Order')
const router = express.Router()


router.get('/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const orders = await Order.findAll({
            where: { userId: userId },
            include: [
                {
                    model: ItemCart, 
                    include: [Product] 
                }
            ]
        });

        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error on get orders" });
    }
});



//mostrar todos os pedidos para o ADMIN
router.get('/', async (req, res) => {
    const { id } = req.params

    try {
        
    } catch (error) {
        
    }
})




module.exports = router;
