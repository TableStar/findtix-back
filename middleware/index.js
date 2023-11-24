const express = require("express");
const uploader = require("../middleware/uploader");

const app = express();
const upload = uploader.uploader("/images");

app.post("/upload", upload.single("file"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({
            success: false,
            message: "No file uploaded",
        });
    }
    // Lakukan sesuatu dengan file yang diunggah
    res.json({
        success: true,
        message: "File uploaded successfully",
        file: req.file,
    });
});
