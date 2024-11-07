const express = require('express');
const ItemCart = require('../models/ItemCart');
const Product = require('../models/Product');
const User = require('../models/User');
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

router.post('/confirm/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        // Cria um novo pedido com o status "Pendente"
        const newOrder = await Order.create({ userId, status: "Pendente" });

        // Busca os itens no carrinho do usuário que ainda não estão associados a um pedido
        const cartItems = await ItemCart.findAll({
            where: {
                userId,
                orderId: null,
            }
        });

        // Associa cada item no carrinho ao novo pedido
        for (let item of cartItems) {
            item.orderId = newOrder.id; 
            await item.save(); 
        }

        // Retorna uma resposta de sucesso com o pedido criado
        res.status(201).json({ message: "Order confirmed", order: newOrder });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error on confirming order" });
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
