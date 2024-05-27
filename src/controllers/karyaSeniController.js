// src/controllers/karyaSeniController.js
const firestore = require('../config/firestore');

exports.addKaryaSeni = async (req, res) => {
    try {
        const { id, judul, deskripsi, media, genre, harga, tahunBuat, fotoKaryaSeni, idSeniman, status, pembeli } = req.body;
        await firestore.collection('KaryaSeni').doc(id).set({
            judul,
            deskripsi,
            media,
            genre,
            harga,
            tahunBuat,
            fotoKaryaSeni,
            idSeniman,
            status,
            pembeli
        });
        res.status(200).send({ message: 'Karya Seni added successfully' });
    } catch (error) {
        res.status(500).send({ error: 'Error adding karya seni', details: error.message });
    }
};

exports.addPenggunaToKaryaSeni = async (req, res) => {
    try {
        const { karyaSeniId, penggunaId, nama, email, peran, deskripsi, minat } = req.body;
        const penggunaRef = firestore.collection('KaryaSeni').doc(karyaSeniId).collection('Pengguna').doc(penggunaId);
        await penggunaRef.set({
            nama,
            email,
            peran,
            deskripsi,
            minat
        });
        res.status(200).send({ message: 'Pengguna added to karya seni successfully' });
    } catch (error) {
        res.status(500).send({ error: 'Error adding pengguna to karya seni', details: error.message });
    }
};

// Implementasi fungsi lain (get, update, delete) sesuai kebutuhan
