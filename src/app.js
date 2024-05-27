// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const penggunaRoutes = require('./routes/penggunaRoutes');
const karyaSeniRoutes = require('./routes/karyaSeniRoutes');
// const transaksiRoutes = require('./routes/transaksiRoutes');
// const rekomendasiRoutes = require('./routes/rekomendasiRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/api/pengguna', penggunaRoutes);
app.use('/api/karyaSeni', karyaSeniRoutes);
// app.use('/api/transaksi', transaksiRoutes);
// app.use('/api/rekomendasi', rekomendasiRoutes);

module.exports = app;
