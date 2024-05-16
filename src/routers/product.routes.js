const controller = require('../controllers/product.controller')

module.exports = (app) =>{
    app.post('/create-product', controller.addProduct)
    app.get('/select-all-product', controller.findAll)
    app.get('/select-one-product/:id', controller.findOne)
    app.delete('/delete-product/:id' , controller.delete)
    app.put('/update-product/:id' , controller.update)
}