import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('hamburgueria', 'root', 'root123', {
    host: 'localhost',
    dialect: 'mysql'
})

export default sequelize