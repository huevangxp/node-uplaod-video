const controller = require('../controllers/product.controller')

module.exports = (app) =>{
    app.post('/add-product', controller.addProduct)
}