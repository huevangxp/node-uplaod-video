const {DataTypes} = require('sequelize')
const sequelize = require('../configs/mysql')

const Users = sequelize.define('users', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    number:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    }
}, {timestamps: true})

module.exports = Users