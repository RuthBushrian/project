const express = require("express");
const { uploadDocument } = require("../service/document");
const isBase64 = require('is-base64');
const path = require('path');
const a = express.Router();

a.route("/")
.get(async (req, res) => {
    const options = {
      headers: {
        'Content-Type': 'image/png' // Replace with the type of file you are serving
      }
    };
  
console.log("\n\n\n\n\n\gfdkjsl");
   const filePath = 'D:\\פרוייקט\\2023_03_18\\server\\public\\a\\c.png'; // Replace with the path to your file
  res.sendFile(filePath, options);

});

module.exports = a;