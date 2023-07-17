/* eslint-disable no-alert */
import axios from 'axios';
import UrlParser from '../../routes/url-parser';
import Swal from 'sweetalert2';

const AdminPuskesmasDelete = {
  async render() {
    return `
    <header id="header" class="fixed-top ">
      <admin-bar></admin-bar>
    </header>

    <div class="container shadow bg-light p-3 my-5 rounded-4">
        <h3 class="text-center mt-3 mb-5">DELETE DATA PUSKESMAS</h3> 
        <div class="row justify-content-center" id="tes">

        </div>
        
        <div class="d-flex justify-content-center">
          <button id="submit" type="submit" class="btn btn-danger mt-3 px-5 fw-bold">Delete</button>
        </div>
    </div>

    <footer>
      <footer-bar></footer-bar>
    </footer>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const res = await axios.get(`https://respon-backend.vercel.app/puskesmas/listPuskesmas?idName=${url.id}`);  
    let datalist = '';
    res.data.forEach((data) => {
      datalist += `
                    <div class="col-sm-6">
                      <form>
                          <div class="mb-3 row px-4">
                              <label for="namaPuskesmas" class="col-sm-5 col-form-label">ID Puskesmas</label>
                              <div class="col-sm-7">
                                <input type="text" class="form-control" id="idPuskesmas" value="${data.idName}" disabled>
                              </div>
                          </div>

                          <div class="mb-3 row px-4">
                              <label for="namaPuskesmas" class="col-sm-5 col-form-label">Nama Puskesmas</label>
                              <div class="col-sm-7">
                                <input type="text" class="form-control" id="namaPuskesmas" value="${data.namaPuskesmas}" required>
                              </div>
                          </div>

                          <div class="mb-3 row px-4">
                              <label for="alamatPuskesmas" class="col-sm-5 col-form-label">Alamat</label>
                              <div class="col-sm-7">
                              <textarea class="form-control" rows="4" id="alamatPuskesmas" required>${data.alamatPuskesmas}</textarea>
                              </div>
                          </div>

                          <div class="mb-3 row px-4">
                              <label for="NoTelepon" class="col-sm-5 col-form-label">No. Telepon</label>
                              <div class="col-sm-7">
                                <input type="text" class="form-control" id="NoTelepon" value="${data.noTelepon}" required>
                              </div>
                          </div>

                          <div class="mb-3 row px-4">
                              <label for="Poli" class="col-sm-5 col-form-label">Poli</label>
                              <div class="col-sm-7">
                                <input type="text" class="form-control" id="Poli" value="${data.poli}" required>
                              </div>
                          </div>
                      </form>
                  </div>

                  <div class="col-sm-6">
                      <form>
                          <div class="mb-3 row px-4">
                              <label for="linkMaps" class="col-sm-5 col-form-label">Maps</label>
                              <div class="col-sm-7">
                                <textarea class="form-control" id="linkMaps" rows="6" required>${data.maps}</textarea>
                              </div>
                          </div>

                          <div class="mb-3 row px-4">
                              <label for="Foto" class="col-sm-5 col-form-label">Foto</label>
                              <div class="col-sm-7">
                                <textarea class="form-control" id="Foto" rows="6" required>${data.foto}</textarea>
                              </div>
                          </div>
                      </form>
                  </div>
      `;
      document.querySelector('#tes').innerHTML = datalist;
    });
    const idPuskesmas = document.querySelector('#idPuskesmas');
    const btnSubmit = document.querySelector('#submit');

    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if (idPuskesmas.value === '') {
        // eslint-disable-next-line no-alert
        alert('Inputan tidak boleh ada yang kosong');
        // namaPuskesmas.value = '';
        // alamatPuskesmas.value = '';
      } else {
        // eslint-disable-next-line no-lonely-if
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
            axios.delete(`https://respon-backend.vercel.app/puskesmas/delete?idName=${idPuskesmas.value}`)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            
            Swal.fire({
              icon: 'success',
              title: 'Deleted Success',
              showConfirmButton: false,
              timer: 1500
            });
            // Swal.fire(
            //   'Deleted!',
            //   'Your file has been deleted.',
            //   'success'
            // );

            setTimeout(() => {
              document.location.href = '/#/admin-data-puskesmas';
            }, 2000);
          }
        });
      }
    });
  },
};

export default AdminPuskesmasDelete;
