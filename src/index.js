// src/index.js
require('dotenv').config();
const app = require('./app');
const PORT = process.env.PORT;
const host_url = process.env.HOST_URL;

app.listen(PORT, () => {
    console.log(`Server is running on port ${host_url}`);
});
