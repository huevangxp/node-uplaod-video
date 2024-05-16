const controller = require('../controllers/user.controller')

module.exports = (app)=>{
    app.post('/register', controller.register)
    app.post('/login', controller.login)
    app.get('/select-all-user', controller.findAll)

}