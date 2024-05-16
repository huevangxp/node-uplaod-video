const express = require('express');
const router = express.Router()

const uploadVideoRoute = require('./upload.video.routes')
const productRoute = require('./product.routes')
const userRoute = require('./user.routes')

uploadVideoRoute(router)
productRoute(router)
userRoute(router)

module.exports = router;