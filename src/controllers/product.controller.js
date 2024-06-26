const Product = require('../models/product.model');

exports.addProduct = async (req, res)=>{
    try {

        const {title, price, desc, video_url, amount,image} = req.body; 

        if(!title || !price || !desc || !amount){
            return res.status(400).json({message:"INVALID DATA"})
        }

      const checkProduct = await Product.findOne({where:{title: title}});
      if(checkProduct){
        return res.status(404).json({message:'PRODUCT ALREADY IN DATABASE'})
      }  

      const response = await Product.create({
        title,
        price,
        desc,
        amount,
        video_url,
        image
      })

      if(!response){
        return res.status(404).json({message: 'CREATE DATA FIELD'})
      }

      return res.status(201).json({message:'CREATE SUCCESS', product: response.title})

    } catch (error) {
        return res.status(500).json({message: 'SERVER ERROR',error: error.message})
    }
}
exports.delete = async (req, res)=>{
    try {
 

        const {id} = req.params;

        if(!id){
            return res.status(400).json({message: "INVALID PRODUCT ID"})
        }

        const dataId = await  Product.findByPk(id);
        if(!dataId){
            return res.status(400).json({message:"INVALID PRODUCT ID"})
        }

        await dataId.destroy()
     
      return res.status(201).json({message:'DELETE SUCCESS'})

    } catch (error) {
        return res.status(500).json({message: 'SERVER ERROR', error: error.message})
    }
}

exports.findAll = async (req ,res)=>{
    try{
            const product = await Product.findAndCountAll();
        if(!product){
            return res.status(404).json({message: 'INVALID PRODUCT NO FOUND'})
        }
        return res.status(200).json(product);
    }catch (e) {
        return res.status(500).json({message: 'SERVER ERROR', error: e.message})
    }
}

exports.findOne = async (req ,res)=>{
    try{
        const {id} = req.params;
        if(!id){
            return res.status(400).json({message:"INVALID PRODUCT ID"})
        }
        const product = await Product.findByPk(id);
        if(!product){
            return res.status(404).json({message:"INVALID PRODUCT ID"})
        }
        return res.status(200).json(product);
    } catch (e) {
        return res.status(500).json({message: 'SERVER ERROR', error: e})
    }
}

exports.update = async (req ,res)=>{
    try{
        const {id} = req.params;
        if(!id){
            return res.status(400).json({message:"INVALID PRODUCT ID"})
        }
        //check product in database
        const product = await Product.findByPk(id);
        if(!product){
            return res.status(404).json({message:"INVALID PRODUCT ID"})
        }
        await product.update(req.body);
        return res.status(201).json({message:'UPDATED SUCCESS'})
    }catch (e) {
        return res.status(500).json({message: 'SERVER ERROR', error: e})
    }
}