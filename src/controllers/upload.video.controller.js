const {getStorage, ref, uploadBytes, getDownloadURL} = require('firebase/storage')


exports.uplaod_video = async (req ,res)=>{
    try {

        const storage = getStorage()

        const video = req.file;
        if(!video){
            return res.status(400).json({message:'No file uploaded'})
        }

        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
        const formattedTime = `${currentDate.getHours().toString().padStart(2, '0')}-${currentDate.getMinutes().toString().padStart(2, '0')}-${currentDate.getSeconds().toString().padStart(2, '0')}`;

        // Generate the new filename
        const originalname = req.file.originalname;
        const filename = `${formattedDate}_${formattedTime}_${originalname}`;

        const StorageRef = ref(storage, filename);
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

exports.uplaod_image = async (req ,res)=>{
    try {
        const storage = getStorage();
        const image = req.file;

        if (!image) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        // Get the current date and time and format them
        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
        const formattedTime = `${currentDate.getHours().toString().padStart(2, '0')}-${currentDate.getMinutes().toString().padStart(2, '0')}-${currentDate.getSeconds().toString().padStart(2, '0')}`;

        // Generate the new filename
        const originalname = req.file.originalname;
        const filename = `${formattedTime}-${formattedDate}-${originalname}`;

        const StorageRef = ref(storage, filename);
        const metaData = {
            contentType: req.file.mimetype // Assuming the image mimetype is correctly set in req.file.mimetype
        };

        uploadBytes(StorageRef, req.file.buffer, metaData)
            .then(() => {
                getDownloadURL(StorageRef).then(url => {
                    return res.status(201).json({ message: "upload success", data: url });
                }).catch((error) => {
                    return res.status(500).json({ message: "upload error", error: error.message });
                });
            }).catch((error) => {
                return res.status(500).json({ message: "upload error", error: error.message });
            });

    } catch (error) {
        return res.status(500).json({message:'Sever Error', error: error.message})
    }
}