const express = require('express');
const router = express.Router()

const uploadVideoRoute = require('./upload.video.routes')

uploadVideoRoute(router)

module.exports = router;