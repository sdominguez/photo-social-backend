const express = require("express");
const router = express.Router();
const multer = require("multer");
const { uploadPhoto, getUserPhotos, deletePhoto } = require("../controllers/photoController");

// Configuración de almacenamiento con Multer
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// Definir rutas
router.post("/upload", upload.single("photo"), uploadPhoto);
router.get("/:userId", getUserPhotos);
router.delete("/:id", deletePhoto);

module.exports = router;
