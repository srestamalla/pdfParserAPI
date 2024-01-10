const pdfParse = require("pdf-parse");
const fs = require("fs");

async function parsePdf(pdfPath) {
  try {
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdfParse(dataBuffer);
    return data.text;
  } catch (error) {
    console.error("Error parsing PDF:", error.message);
    console.error("Error details:", error.details);
    throw error;
  }
}

module.exports = { parsePdf };
