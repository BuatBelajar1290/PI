const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const app = express();

// Set storage engine for uploaded files
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename(req, file, cb) {
    cb(null, file.originalname);
  }
});
  
// Initialize multer upload
const upload = multer({ storage }).single('image');

// ARTIKEL INPUT
app.post('/artikel-input', (req, res) => {
  upload(req, res, (err) => {
    const { judul, artikel } = req.body;

    const idName = judul.split(' ').join('-');
    const image = req.file ? req.file.filename : null;
    const insertSql = 'INSERT INTO artikel (judul, artikel, idname, image, artikelDepan) VALUES (?, ?, ?, ?, ?);';
    console.log(insertSql);

    console.log('Alhamdullilah berhasil');
    // db.query(insertSql,[judul, artikel, idName, image, artikelDepan], (err, result) => {
    //     if (err) throw err
    //     console.log("Alhamdullilah berhasil");
    //     res.redirect('/artikel-kelola');
    // })
  });
});

const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log('Example app listening on http://localhost:3000'));