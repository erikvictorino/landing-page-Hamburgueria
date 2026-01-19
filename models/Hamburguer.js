import { DataTypes } from 'sequelize'
import db from '../db/conn.js'

const Hamburguer = db.define('hamburguer', {
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    price:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Hamburguer