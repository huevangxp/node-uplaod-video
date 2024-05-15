const {Sequelize} = require('sequelize')


const sequelize = new Sequelize(  'flutter-course','root','', {
host:'localhost',
dialect:'mysql',
post:8080,
logging:false
})

sequelize.authenticate().then(()=>{
    console.log('Server connected database successfully...')
}).catch((err)=>{
    console.log(err.message)
})

sequelize.sync()
module.exports = sequelize;