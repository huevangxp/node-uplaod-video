const {DataTypes} = require('sequelize')
const sequelize = require('../configs/mysql')

const Product = sequelize.define('products',{
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true  
    }, 
    title:{
        type: DataTypes.STRING,
        allowNull: false
    }, 
    image: {
        type: DataTypes.STRING,
    },
    video_url: {
        type: DataTypes.STRING
    },
    desc:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    price:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    amount:{
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {timestamps: true}, 'sequelize')

module.exports = Product;