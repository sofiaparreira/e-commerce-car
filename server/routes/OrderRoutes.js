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
        // 1. Criar um novo pedido para o usuário
        const newOrder = await Order.create({ userId });

        // 2. Buscar todos os itens no carrinho do usuário (sem `orderId` associado)
        const cartItems = await ItemCart.findAll({
            where: {
                userId,
                orderId: null, // Somente itens não confirmados
            }
        });

        // 3. Associar cada item do carrinho ao novo pedido
        for (let item of cartItems) {
            item.orderId = newOrder.id; // Define o orderId para cada item do carrinho
            await item.save(); // Salva a mudança no banco de dados
        }

        // 4. Retornar a confirmação de que o pedido foi criado
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
