const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Product = sequelize.define('Product', {
    id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },

    brand: {
        type: DataTypes.STRING,
        allowNull: false


    },

    year: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isInt: true,
            min: 1886,
            max: new Date().getFullYear()

        }

    },
    power: {
        type: DataTypes.STRING,
        allowNull: false
    },
    engine: {
        type: DataTypes.STRING,
        allowNull: false


    }, 
    description: {
        type: DataTypes.STRING,
        allowNull: true

    }, 

    image: {
        type: DataTypes.STRING,
        allowNull: true
 

    }


})


module.exports = Product