require('dotenv').config();

const express = require("express");
const app = express();
const PORT = 8600;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => { 
    res.send('Welcome to iBukun cloudinary project');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));