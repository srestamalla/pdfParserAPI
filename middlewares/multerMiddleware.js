const multer = require("multer");
const fs = require("fs");
const path = require("path");

const destinationPath = path.join(__dirname, "../uploads");

// Check if the destination folder exists, and create it if not
if (!fs.existsSync(destinationPath)) {
  fs.mkdirSync(destinationPath);
}

const storage = multer.diskStorage({
  destination: destinationPath,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = { upload };
