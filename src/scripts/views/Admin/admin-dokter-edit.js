import axios from 'axios';
import UrlParser from '../../routes/url-parser';
import Swal from 'sweetalert2';

const AdminDokterEdit = {
  async render() {
    return `
    <header id="header" class="fixed-top ">
      <admin-bar></admin-bar>
    </header>
    
    <div class="container shadow bg-light p-3 my-5 rounded-4">
        <h3 class="text-center mt-3 mb-5">DATA DOKTER</h3> 
        <div class="row justify-content-center" id="tes">

        </div>
        
        <div class="d-flex justify-content-center">
          <button id="submit" type="submit" class="btn btn-primary mt-3 px-5 fw-bold">Update</button>
        </div>
    </div>

    <footer>
      <footer-bar></footer-bar>
    </footer>
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
                              <label for="linkMaps" class="col-sm-5 col-form-label">Id</label>
                              <div class="col-sm-7">
                                <input type="text" class="form-control" id="Id" value = "${data.id}" disabled>
                              </div>
                          </div>

                          <div class="mb-3 row px-4">
                              <label for="namaDokter" class="col-sm-5 col-form-label">Nama Dokter</label>
                              <div class="col-sm-7">
                                <input type="text" class="form-control" id="namaDokter" value="${data.namaDokter}" required>
                              </div>
                          </div>

                          <div class="mb-3 row px-4">
                              <label for="alamatDokter" class="col-sm-5 col-form-label">Poli Praktek</label>
                              <div class="col-sm-7">
                                <input type="text" class="form-control" id="Poli" value="${data.poli}">
                              </div>
                          </div>

                          <div class="mb-3 row px-4">
                              <label for="NoTelepon" class="col-sm-5 col-form-label">Jadwal Praktek</label>
                              <div class="col-sm-7">
                                <input type="text" class="form-control" id="jadwalPraktek" value="${data.jadwalPraktek}">
                              </div>
                          </div>

                          <div class="mb-3 row px-4">
                            <label class="col-sm-5 col-form-label">Jam Praktek</label>
                            <div class="col-sm-7">
                              <select class="form-select" aria-label="Pilih Jam Praktek" id="jamPraktek">
                                <option selected>${data.jamPraktek}</option>
                                <option value="08:00 - 11:30">08:00 - 11:30</option>
                                <option value="13:00 - 16:30">13:00 - 16:30</option>
                              </select>
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
    const Id = document.querySelector('#Id');
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
          title: 'Do you want to save the changes?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Save',
          denyButtonText: 'Dont save',
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success');
            axios.put(`https://respon-backend.vercel.app/dokter/update?namaDokter=${namaDokter.value}&poli=${Poli.value}&jamPraktek=${JamPraktek.value}&jadwalPraktek=${JadwalPraktek.value}&id=${Id.value}`)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            
            console.log(namaDokter.value, Poli.value, JadwalPraktek.value, JamPraktek.value, Id.value);
            
            setTimeout(() => {
              document.location.reload();
            }, 3000);
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info');
          }
        });
      }
    });
  },
};

export default AdminDokterEdit;
