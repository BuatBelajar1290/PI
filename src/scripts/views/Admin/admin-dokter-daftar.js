import axios from 'axios';
import UrlParser from '../../routes/url-parser';
import Swal from 'sweetalert2';
// import multer from 'multer';
// import path from 'path';

const AdminDokterDaftar = {
  async render() {
    return `
    <header id="header" class="fixed-top ">
      <admin-bar></admin-bar>
    </header>

    <div class="container shadow bg-light p-3 my-5 rounded-4">
        <h3 class="text-center mt-3 mb-5">ISI DATA DOKTER</h3> 
        <div class="row justify-content-center">
            <div class="col-sm-6">
                <form>
                    <div id="puskesmasId">
                      
                    </div>

                    <div class="mb-3 row px-4">
                        <label class="col-sm-5 col-form-label">Nama Dokter</label>
                        <div class="col-sm-7">
                          <input type="text" class="form-control" id="namaDokter" required>
                        </div>
                    </div>

                    <div class="mb-3 row px-4">
                        <label class="col-sm-5 col-form-label">Poli Praktek</label>
                        <div class="col-sm-7">
                          <input type="text" class="form-control" id="Poli" required>
                        </div>
                    </div>

                    <div class="mb-3 row px-4">
                        <label class="col-sm-5 col-form-label">Jadwal Praktek</label>
                        <div class="col-sm-7">
                          <input type="text" class="form-control" id="jadwalPraktek" required>
                        </div>
                    </div>

                    <div class="mb-3 row px-4">
                        <label class="col-sm-5 col-form-label">Jam Praktek</label>
                        <div class="col-sm-7">
                          <select class="form-select" aria-label="Pilih Jam Praktek" id="jamPraktek">
                            <option selected></option>
                            <option value="08:00 - 11:30">08:00 - 11:30</option>
                            <option value="13:00 - 16:30">13:00 - 16:30</option>
                          </select>
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
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const res = await axios.get(`https://respon-backend.vercel.app/puskesmas/listInti?idName=${url.id}`);
    // const res = await axios('https://respon-backend.vercel.app/pasien/list');
    let datalist = '';
    console.log(datalist);
    res.data.forEach((data) => {
      datalist += `
                    <div class="mb-3 row px-4">
                      <label class="col-sm-5 col-form-label">Puskesmas Id</label>
                      <div class="col-sm-7">
                        <input type="text" class="form-control" id="idPuskesmas" value="${data.idName}" disabled>
                      </div>
                    </div>
      `;
      document.querySelector('#puskesmasId').innerHTML = datalist;
    });

    // // Set storage engine for uploaded files
    // const storage = multer.diskStorage({
    //   destination: './public/uploads/',
    //   filename(req, file, cb) {
    //     cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
    //   }
    // });

    // // Initialize multer upload
    // const upload = multer({ storage, }).single('image');

    const namaDokter = document.querySelector('#namaDokter');
    const poli = document.querySelector('#Poli');
    const jadwalPraktek = document.querySelector('#jadwalPraktek');
    const jamPraktek = document.querySelector('#jamPraktek');
    const idPuskesmas = document.querySelector('#idPuskesmas');
    const btnSubmit = document.querySelector('#submit');

    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();

      if (namaDokter.value === '' || 
      poli.value === '' || 
      jadwalPraktek.value === '' ||
      jamPraktek.value === '' || 
      idPuskesmas.value === '') {
        Swal.fire({
          icon: 'error',
          title: 'Ada Form Yang Belum Terisi',
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        axios.post(`https://respon-backend.vercel.app/dokter/add?namaDokter=${namaDokter.value}&poli=${poli.value}&jamPraktek=${jamPraktek.value}&jadwalPraktek=${jadwalPraktek.value}&puskesmasId=${idPuskesmas.value}`)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        setTimeout(() => {
          document.location.reload();
        }, 3000);

        console.log(idPuskesmas.value, jamPraktek.value);
        Swal.fire({
          icon: 'success',
          title: 'Berhasil Tambah Data',
          showConfirmButton: false,
          timer: 1500
        });
      }
    });

    const daftar = document.querySelector('#daftar');
    // daftar.classList.add('active');
  },
};

export default AdminDokterDaftar;
