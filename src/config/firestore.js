// src/config/firestore.js
const { Firestore } = require('@google-cloud/firestore');
const firestore = new Firestore({
    projectId: 'coba-coba-belajar',
    keyFilename: './testing-firestore-key.json',
  });

module.exports = firestore;
