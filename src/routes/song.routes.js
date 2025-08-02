const express = require("express");
const multer = require("multer");
const uploadToImageKit = require("../service/storage.service");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/song", upload.single("audio"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);
  const fileData = await uploadToImageKit(req.file);
  console.log(fileData);

  res.json({
    message: "song is save",
    data: req.body,
    fileData,
  });
});

module.exports = router;
