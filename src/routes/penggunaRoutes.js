// src/routes/penggunaRoutes.js
const express = require('express');
const router = express.Router();
const penggunaController = require('../controllers/penggunaController');

router.post('/add', penggunaController.addPengguna);
router.get('/:id', penggunaController.getPengguna);

// Tambahkan rute lain sesuai kebutuhan

module.exports = router;
