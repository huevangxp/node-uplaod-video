const controller = require('../controllers/upload.video.controller')
const upload = require('../configs/firebase')
module.exports = (app) =>{
    app.post('/upload-video',upload.single('video'), controller.uplaod_video);
    app.post('/upload-image',upload.single('image'), controller.uplaod_image);
}