import axios from 'axios';
import Swal from 'sweetalert2';

// const path = require('path');
// const multer = require('multer');

const AdminPuskesmasDaftar = {
  async render() {
    return `
    <header id="header" class="fixed-top ">
      <admin-bar></admin-bar>
    </header>


    <div class="container shadow bg-light p-3 my-5 rounded-4">
        <h3 class="text-center mt-3 mb-5">ISI DATA PUSKESMAS</h3> 
        <div class="row">
        <div class="col-sm-6">
        <form>
            <div class="mb-3 row px-4">
                <label for="namaPuskesmas" class="col-sm-5 col-form-label">Nama Puskesmas</label>
                <div class="col-sm-7">
                  <input type="text" class="form-control" id="namaPuskesmas" required>
                </div>
            </div>

            <div class="mb-3 row px-4">
                <label for="alamatPuskesmas" class="col-sm-5 col-form-label">Alamat</label>
                <div class="col-sm-7">
                <textarea class="form-control" id="alamatPuskesmas" rows="4" required></textarea>
                </div>
            </div>

            <div class="mb-3 row px-4">
                <label for="NoTelepon" class="col-sm-5 col-form-label">No. Telepon</label>
                <div class="col-sm-7">
                  <input type="text" class="form-control" id="NoTelepon" required>
                </div>
            </div>

            <div class="mb-3 row px-4">
                <label for="Poli" class="col-sm-5 col-form-label">Poli</label>
                <div class="col-sm-7">
                  <input type="text" class="form-control" id="Poli" required>
                </div>
            </div>
        </form>
    </div>

    <div class="col-sm-6">
        <form>
            <div class="mb-3 row px-4">
                <label for="linkMaps" class="col-sm-5 col-form-label">Maps</label>
                <div class="col-sm-7">
                  <textarea class="form-control" id="linkMaps" rows="5" required></textarea>
                </div>
            </div>

            <div class="mb-3 row px-4">
                <label for="Foto" class="col-sm-5 col-form-label">Foto</label>
                <div class="col-sm-7">
                  <textarea class="form-control" id="Foto" rows="5" required></textarea>
                </div>
            </div>
        </form>
    </div>
        </div>
        
        <div class="d-flex justify-content-center">
            <button id="submit" type="submit" class="btn btn-primary mt-3 px-5 fw-bold">Daftar</button>
        </div>
    </div>

    <footer>
      <footer-bar></footer-bar>
    </footer>
      `;
  },

  async afterRender() {
    const namaPuskesmas = document.querySelector('#namaPuskesmas');
    const alamatPuskesmas = document.querySelector('#alamatPuskesmas');
    const noTelepon = document.querySelector('#NoTelepon');
    const linkMaps = document.querySelector('#linkMaps');
    const poli = document.querySelector('#Poli');
    const foto = document.querySelector('#Foto');
    const btnSubmit = document.querySelector('#submit');

    // // Set storage engine for uploaded files
    // const storage = multer.diskStorage({
    //   destination: './src/public/uploads/',
    //   filename(req, file, cb) {
    //     cb(null, file.originalname);
    //   }
    // });
    
    // // Initialize multer upload
    // const upload = multer({ storage }).single('image');

    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();

      const idName = namaPuskesmas.value.split(' ').join('-');

      if (namaPuskesmas.value === '' || 
      alamatPuskesmas.value === '' || 
      noTelepon.value === '' || 
      linkMaps.value === '' || 
      poli.value === '' || 
      foto.value === '') {
        Swal.fire({
          icon: 'error',
          title: 'Gagal Tambah Data',
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        axios.post(`https://respon-backend.vercel.app/puskesmas/add?namaPuskesmas=${namaPuskesmas.value}&alamatPuskesmas=${alamatPuskesmas.value}&noTelepon=${noTelepon.value}&maps=${linkMaps.value}&poli=${poli.value}&foto=${foto.value}&idName=${idName}`)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        // upload((req, res, err) => {
        //   if (err) {
        //     console.log(err);
        //     // Handle any error that occurs during file upload
        //   } else {
        //     const image = req.file ? req.file.filename : null;
        //     console.log(image);
        //     // File upload was successful, you can process the uploaded file here
        //   }
        // });

        Swal.fire({
          icon: 'success',
          title: 'Berhasil Tambah Data',
          showConfirmButton: false,
          timer: 1500
        });

        setTimeout(() => {
          document.location.href = '/#/admin-data-puskesmas';
        }, 2000);

        // console.log(namaPuskesmas, alamatPuskesmas, NoTelepon, linkMaps, Poli, Denah, Foto, idName);
        // eslint-disable-next-line no-alert
        // alert('Inputan berhasil');
        // namaPuskesmas.value = '';
        // alamatPuskesmas.value = '';
        // NoTelepon.value = '';
        // linkMaps.value = '';
        // Poli.value = '';
        // Denah.value = '';
        // Foto.value = '';
        // IdName.value = '';
      }
    });

    const daftar = document.querySelector('#daftar');
    // daftar.classList.add('active');
  },
};

export default AdminPuskesmasDaftar;
