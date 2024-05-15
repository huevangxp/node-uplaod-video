const express = require('express');
const router = express.Router()

const uploadVideoRoute = require('./upload.video.routes')
const productRoute = require('./product.routes')

uploadVideoRoute(router)
productRoute(router)

module.exports = router;