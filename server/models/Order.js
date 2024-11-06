const sequelize = require('../config/database')
const { DataTypes } = require('sequelize');
const User = require('./User')
const Product = require('./Product')



const Order = sequelize.define('Order', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },

    status: {
        type: DataTypes.ENUM('Pendente', 'Pago', 'Enviado', 'Entregue')
    },

    productId: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        references: {
            model: User,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    }

})


Order.belongsTo(User, { foreignKey: 'userId'})
Order.belongsTo(Product, {foreignKey: 'productId'})
User.hasMany(Order, { foreignKey: 'userId'})
Product.hasMany(Order, { foreignKey: 'productId'})

module.exports = ItemCart;