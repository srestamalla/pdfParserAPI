const express = require("express");
const pdfController = require("../controllers/pdfController");
const multerMiddleware = require("../middlewares/multerMiddleware");

const router = express.Router();

router.post(
  "/upload",
  multerMiddleware.upload.single("pdfFile"),
  async (req, res) => {
    try {
      if (req.file) {
        const pdfPath = req.file.path;
        const text = await pdfController.parsePdf(pdfPath);
        res.json({ text });
      } else {
        res
          .status(400)
          .json({ error: "No file provided or file upload error" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

module.exports = router;
