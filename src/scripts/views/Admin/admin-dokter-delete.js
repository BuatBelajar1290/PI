/* eslint-disable no-alert */
import axios from 'axios';
import UrlParser from '../../routes/url-parser';
import Swal from 'sweetalert2';

const AdminDokterDelete = {
  async render() {
    return `
    <div class="container shadow bg-light p-3 my-5 rounded-4">
        <h3 class="text-center mt-3 mb-5">DATA DOKTER</h3> 
        <div class="row justify-content-center" id="tes">

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
              <label class="col-sm-5 col-form-label">ID Puskesmas</label>
              <div class="col-sm-7">
                <input type="text" class="form-control" id="idPuskesmas" value="${data.puskesmasId}" disabled>
              </div>
          </div>

          <div class="mb-3 row px-4">
              <label class="col-sm-5 col-form-label">Id</label>
              <div class="col-sm-7">
                <input type="text" class="form-control" id="Id" value = "${data.id}" disabled>
              </div>
          </div>

          <div class="mb-3 row px-4">
              <label class="col-sm-5 col-form-label">Nama Dokter</label>
              <div class="col-sm-7">
                <input type="text" class="form-control" id="namaDokter" value="${data.namaDokter}" required>
              </div>
          </div>

          <div class="mb-3 row px-4">
              <label class="col-sm-5 col-form-label">Poli Praktek</label>
              <div class="col-sm-7">
                <input type="text" class="form-control" id="Poli" value="${data.poli}">
              </div>
          </div>

          <div class="mb-3 row px-4">
              <label class="col-sm-5 col-form-label">Jadwal Praktek</label>
              <div class="col-sm-7">
                <input type="text" class="form-control" id="jadwalPraktek" value="${data.jadwalPraktek}">
              </div>
          </div>

          <div class="mb-3 row px-4">
            <label class="col-sm-5 col-form-label">Jam Praktek</label>
            <div class="col-sm-7">
              <select class="form-select" aria-label="Pilih Jam Praktek" id="jamPraktek">
                <option selected>${data.jamPraktek}</option>
              </select>
            </div>
        </div>
      </form>
  </div>
      `;
      document.querySelector('#tes').innerHTML = datalist;
    });

    const idPuskesmas = document.querySelector('#idPuskesmas');
    const id = document.querySelector('#Id');
    const btnSubmit = document.querySelector('#submit');

    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if (namaDokter.value === '') {
        // eslint-disable-next-line no-alert
        alert('Inputan tidak boleh ada yang kosong');
        // namaPuskesmas.value = '';
        // alamatPuskesmas.value = '';
      } else {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete(`https://respon-backend.vercel.app/dokter/delete?id=${Id.value}`)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            
            Swal.fire({
              icon: 'success',
              title: 'Data Berhasil Di Delete ',
              showConfirmButton: false,
              timer: 1500
            });

            console.log(id.value, idPuskesmas.value);

            setTimeout(() => {
              document.location.href = `/#/admin-detail-puskesmas/${idPuskesmas.value}`;
            }, 3000);
          }
        });
      }
    });
  },
};

export default AdminDokterDelete;
