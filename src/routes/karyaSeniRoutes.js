// src/routes/karyaSeniRoutes.js
const express = require('express');
const router = express.Router();
const karyaSeniController = require('../controllers/karyaSeniController');

router.post('/add', karyaSeniController.addKaryaSeni);
router.post('/:karyaSeniId/addPengguna', karyaSeniController.addPenggunaToKaryaSeni);

// Tambahkan rute lain sesuai kebutuhan

module.exports = router;
