require('dotenv').config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8600;
const cors = require("cors");
const cloudinary = require("./cloudinary/cloudinary");
const { response } = require('express');

app.use(cors());
app.use(express.json({ limit: '50mb'}));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.get("/", (req, res) => { 
    res.send('Welcome to iBukun cloudinary project');
});

app.post("/", async (req, res) => {
  const { images } = req.body;
  const uploadedImgs = images.map(async (image) => {
    const upload = await cloudinary.uploader.upload(
      image,
      {
        upload_preset: "unsigned_upload",
        allowed_formats: ["png", "jpg", "jpeg", "svg", "ico", "gif", "webp"],
      },
      function (error, result) {
        if (error) {
          console.log(error);
        }
      }
    );
    return upload;
  });

  try {
    const fulfilled = await Promise.all(uploadedImgs).then((values) => {
      return values;
    });
    const publicIds = fulfilled.map((image) => {
      return image.public_id;
    });
    console.log(publicIds);
    res.status(200).json(publicIds);
  } catch (err) {
    res.status(500).json(err);
  }
});



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));