const multer = require("multer");
const fs = require("fs");

module.exports = {
  uploader: (directory) => {
    //lokasi utama penyimpanan file
    const defaultDir = "./public";
    //Konfigurasi multer
    const storageUploader = multer.diskStorage({
      destination: (req, file, cb) => {
        const pathDir = directory ? defaultDir + directory : defaultDir;
        //pemeriksaan directory ada ato nggak
        if (fs.existsSync(pathDir)) {
          //jika ditemukan dir nya maka parameter cb dari destination akan menyimpan file
          console.log(`Directory ${pathDir} exist`);
          cb(null, pathDir);
        } else
          fs.mkdir(pathDir, (error) => {
            if (error) {
              console.log(error);
            }
            return cb(error, pathDir);
          });
      },
      filename: (req, file, cb) => {
        //menentukan nama file yang akan disimpan
        cb(null, `${Date.now()}-${file.originalname}`);
      },
    });
    const fileFilter = (req, file, cb) => {
      console.log("File from request client", file);
      if (
        file.originalname.toLowerCase().includes("png") ||
        file.originalname.toLowerCase().includes("jpg")
      ) {
        cb(null, true);
      } else {
        cb(new Error("Denied. Only PNG or JPG allowed", false));
      }
    };
    return multer({ storage: storageUploader, fileFilter: fileFilter });
  },
};