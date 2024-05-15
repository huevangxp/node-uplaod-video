const {Sequelize} = require('sequelize')


const sequelize = new Sequelize(  'flutter-course','root','', {
host:'localhost',
dialect:'mysql2',
port:8080,
loging:false
})

sequelize.authenticate().then(()=>{
    console.log('Server connected database successfully...')
}).catch((err)=>{
    console.log(err)
})

sequelize.sync()
module.exports = sequelize;