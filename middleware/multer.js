const multer = require("multer");
const fs = require("fs")

module.exports = {
    uploader: (directory) => {

        // Lokasi utama penyimpanan file
        const defaultDir = "./public";

        // Konfigurasi multer
        const storageUploader = multer.diskStorage({
            destination:(req, file, cb) => {
                const pathDir = directory ? defaultDir + directory : defaultDir;
                // Pemeriksaan direktori
                if(fs.existsSync(pathDir)){
                    // Jika derictory ditemukan maka parameter callback dari destination akan menyimpan filenya
                    console.log(`Directory ${pathDir} exist`);
                    cb(null, pathDir);

                }else {
                    fs.mkdir(pathDir, (error) => {
                        if (error) {
                            console.log('Error Create Directory', error);
                        }
                        return cb(error, pathDir);
                    });
                }
            },
            filename: (req, file, cb) => {
                // Menentukan nama file yang akan disimpan
                cb(null, `${Date.now()}-${file.originalname}`);
            }
        });

        const fileFilter = (req, file, cb) => {
            console.log("CHECK FILE FROM REQUEST CLIENTS", file);
            if (file.originalname.toLowerCase().includes("png") || 
            file.originalname.toLowerCase().includes("jpg")){
                cb(null, true);
            }
            else {
                cb(new Error ("Your file extention are denied. Only png or JPG", false))
            }
        };

        return multer({storage:storageUploader, fileFilter: fileFilter})
    },
};

