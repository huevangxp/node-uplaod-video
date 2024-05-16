const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User  = require('../models/user.model')

exports.register = async (req, res) => {
    try {
        const {username, number, password } = req.body;
        if(!username || !number || !password){
            return res.stats(400).json({message:"INVALID USER DATA"})
        }
        const user = await  User.findOne({where:{username: username}});
        if(user){
            return res.status(404).json({message:'INVALID USER'})
        }

        const gePass = await  bcrypt.hash(password, 10);

        const data = {
            username,
                number,
                password:gePass
        }

        const response = await  User.create(data);
        return  res.status(201).json({message:"CREATE SUCCESS", user: response.username})
    }catch (e) {
        return res.status(500).json({message:'SERVER ERROR', error: e.message})
    }
}

exports.login = async  (req, res) => {
    try {

        const {username , password} = req.body;
        if(!username || !password){
            return res.status(400).json({message:"INVALID USER DATA"})
        }

        const user = await  User.findOne( { where : {username: username}} )
        if(!user){
            return res.status(404).json({message:"INVALID USER'})"})
        }

        const  checkpass = await  bcrypt.compare( password, user.password);
    if(!checkpass){
        return  res.status(200).json({message:"PASSWORD INCCORT"})
    }
    const data = {
        username:user.username,
        number: user.number
    }
    const token = await  jwt.sign(data, 'huevang-flutter', {expiresIn:'7d'})
        return res.status(200).json({message:"LOGIN SUCCESS", token: token, data: data})
    }catch (e) {
        return res.status(500).json({message:"SERVER ERROR", error: e.message})
    }
}

exports.findAll = async (req, res) =>{
    try{
        const response = await  User.findAll()
        if(!response){
            return  res.status(400).json({message:'INVALID USER'})
        }
        return  res.status(200).json({message:response})
    }catch (e) {
        return res.status(500).json({message: 'SERVER ERROR', error: e.message})
    }
}

exports.findOne = async (req, res)  => {
    try {
        const {id} = req.params;

        if(!id){
            return res.status(400).json({message: 'INVALID USER ID'})
        }
        const response = await User.findByPk(id);
        if(!response){
            return  res.status(404).json({message:"INVALID USER DATA"})
        }
        return res.status(200).json({message:response})
    }catch (e) {
        return res.status(500).json({message:'SERVER ERROR', error: e.message})
    }
}

exports.delete = async (req, res) => {
    try {
        const {id} = req.params;
        if(!id){
            return res.status(400).json({message: 'INVALID USER ID'})
        }
        const findUser = await  User.findByPk(id);

        if(!findUser){
            return res.status(404).json({message:"INVALID USER DATA"})
        }
        await findUser.destroy()
        return res.status(201).json({message: 'DELETE USER SUCCESS'})
    }catch (e) {
        return res.status(500).json({message: 'SERVER ERROR', error: e.message})
    }
}