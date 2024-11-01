const sequelize = require('./config/database')
const Product = require('./models/Product')
const User = require('./models/User')

sequelize.sync({ force: true }).then(() => {
    console.log('Synced database')
}).catch((error) => {
    console.error('Erro ao sincronizar banco de dados: ', error)
})