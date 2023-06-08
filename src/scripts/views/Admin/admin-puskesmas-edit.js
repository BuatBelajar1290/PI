import axios from 'axios';
import UrlParser from '../../routes/url-parser';

const AdminPuskesmasEdit = {
  async render() {
    return `
    <div class="container shadow bg-light p-3 my-5 rounded-4">
        <h3 class="text-center mt-3 mb-5">DATA PUSKESMAS</h3> 
        <div class="row" id="tes">

        </div>
        
        <div class="d-flex justify-content-center">
          <button id="submit" type="submit" class="btn btn-primary mt-3 px-5 fw-bold">Update</button>
        </div>
    </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const res = await axios.get(`https://respon-backend.vercel.app/puskesmas/listPuskesmas?id=${url.id}`);
    let datalist = '';
    res.data.forEach((data) => {
      datalist += `
                  <div class="col-sm-6">
                      <form>
                          <div class="mb-3 row px-4">
                              <label for="namaDokter" class="col-sm-5 col-form-label">Nama Dokter</label>
                              <div class="col-sm-7">
                                <input type="text" class="form-control" id="namaDokter" value="${data.namaDokter}" required>
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
        axios.put(`https://respon-backend.vercel.app/dokter/update?namaDokter=${namaDokter.value}&poli=${Poli.value}&puskesmasId=${puskesmasId.value}&id=${Id.value}`)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        // eslint-disable-next-line no-alert
        alert('Update berhasil');
        document.location.reload();
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
  },
};

export default AdminPuskesmasEdit;
