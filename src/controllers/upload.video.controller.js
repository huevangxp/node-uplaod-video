const {getStorage, ref, uploadBytes, getDownloadURL} = require('firebase/storage')


exports.uplaod_video = async (req ,res)=>{
    try {

        const storage = getStorage()

        const video = req.file;

        if(!video){
            return res.status(400).json({message:'No file uploaded'})
        }

        const StorageRef = ref(storage, req.file.originalname);
        const metaData = {
            contenttype:'video/mp4'
        };

        uploadBytes(StorageRef, req.file.buffer, metaData)
        .then(() => {
            getDownloadURL(StorageRef).then(url =>{
            return res.status(201).json({message:"upload success", data:url})
            }).catch((error)=>{
                return res.status(500).json({message:"upload error",error: error.message})
            })
        })
        
    } catch (error) {
        return res.status(500).json({message: 'Server Error', error: error.message})
    }
}