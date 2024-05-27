// src/controllers/penggunaController.js
const firestore = require('../config/firestore');

exports.addPengguna = async (req, res) => {
    try {
        const { id, nama, email, peran, deskripsi, minat } = req.body;
        await firestore.collection('Pengguna').doc(id).set({
            nama,
            email,
            peran,
            deskripsi,
            minat
        });
        res.status(200).send({ message: 'Pengguna added successfully' });
    } catch (error) {
        res.status(500).send({ error: 'Error adding pengguna', details: error.message });
    }
};

exports.getPengguna = async (req, res) => {
    try {
        const penggunaRef = firestore.collection('Pengguna').doc(req.params.id);
        const doc = await penggunaRef.get();
        if (!doc.exists) {
            res.status(404).send({ error: 'Pengguna not found' });
        } else {
            res.status(200).send(doc.data());
        }
    } catch (error) {
        res.status(500).send({ error: 'Error getting pengguna', details: error.message });
    }
};

// Implementasi fungsi lain (update, delete, dll.) sesuai kebutuhan
