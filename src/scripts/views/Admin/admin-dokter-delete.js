/* eslint-disable no-alert */
import axios from 'axios';
import UrlParser from '../../routes/url-parser';

const AdminDokterDelete = {
  async render() {
    return `
    <div class="container shadow bg-light p-3 my-5 rounded-4">
        <h3 class="text-center mt-3 mb-5">DATA DOKTER</h3> 
        <div class="row" id="tes">

        </div>
        
        <div class="d-flex justify-content-center">
          <button id="submit" type="submit" class="btn btn-danger mt-3 px-5 fw-bold">Delete</button>
        </div>
    </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const res = await axios.get(`https://respon-backend.vercel.app/dokter/listInti?id=${url.detail}`);
    let datalist = '';
    res.data.forEach((data) => {
      datalist += `
                  <div class="col-sm-6">
                      <form>
                          <div class="mb-3 row px-4">
                              <label for="namaDokter" class="col-sm-5 col-form-label">Nama Dokter</label>
                              <div class="col-sm-7">
                                <input type="text" class="form-control" id="namaDokter" value="${data.namaDokter}">
                              </div>
                          </div>

                          <div class="mb-3 row px-4">
                              <label for="alamatDokter" class="col-sm-5 col-form-label">Poli Praktek</label>
                              <div class="col-sm-7">
                                <input type="text" class="form-control" id="Poli">
                              </div>
                          </div>

                          <div class="mb-3 row px-4">
                              <label for="NoTelepon" class="col-sm-5 col-form-label">Jadwal Praktek</label>
                              <div class="col-sm-7">
                                <input type="text" class="form-control" id="jadwalPraktek">
                              </div>
                          </div>

                          <div class="mb-3 row px-4">
                              <label for="linkMaps" class="col-sm-5 col-form-label">Jam Praktek</label>
                              <div class="col-sm-7">
                                <input type="text" class="form-control" id="jamPraktek" disabled>
                              </div>
                          </div>

                          <div class="mb-3 row px-4">
                              <label for="linkMaps" class="col-sm-5 col-form-label">Id Puskesmas</label>
                              <div class="col-sm-7">
                                <input type="text" class="form-control" id="IdPuskesmas" value = "${data.puskesmasId}" disabled>
                              </div>
                          </div>

                          <div class="mb-3 row px-4">
                              <label for="linkMaps" class="col-sm-5 col-form-label">Id</label>
                              <div class="col-sm-7">
                                <input type="text" class="form-control" id="Id" value = "${data.id}" disabled>
                              </div>
                          </div>
                      </form>
                  </div>
      `;
      document.querySelector('#tes').innerHTML = datalist;
    });
    const namaDokter = document.querySelector('#namaDokter');
    const Poli = document.querySelector('#Poli');
    const JadwalPraktek = document.querySelector('#jadwalPraktek');
    const JamPraktek = document.querySelector('#jamPraktek');
    const puskesmasId = document.querySelector('#IdPuskesmas');
    const Id = document.querySelector('#Id');
    // const IdName = document.querySelector('#IdName');
    const btnSubmit = document.querySelector('#submit');

    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if (namaDokter.value === '') {
        // eslint-disable-next-line no-alert
        alert('Inputan tidak boleh ada yang kosong');
        // namaPuskesmas.value = '';
        // alamatPuskesmas.value = '';
      } else {
        // eslint-disable-next-line no-lonely-if
        if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
          // kode untuk menghapus data
          axios.delete(`https://respon-backend.vercel.app/dokter/delete?id=${Id.value}`)
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
          alert('Data berhasil dihapus!');
          // alert('Update berhasil');
          document.location.href = `/#/admin-detail-puskesmas/${url.id}`;
        } else {
          alert('Penghapusan data dibatalkan.');
        }
        // eslint-disable-next-line no-alert
        // document.location.href = 'http://localhost:8081/#/admindatadokter/puskesmas-rajeg';
      }
    });
  },
};

export default AdminDokterDelete;
