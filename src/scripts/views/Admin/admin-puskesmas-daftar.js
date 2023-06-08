import axios from 'axios';

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
                        <label for="namaPuskesmas" class="col-sm-5 col-form-label">Nama Pasien</label>
                        <div class="col-sm-7">
                          <input type="text" class="form-control" id="namaPuskesmas" required>
                        </div>
                    </div>

                    <div class="mb-3 row px-4">
                        <label for="alamatPuskesmas" class="col-sm-5 col-form-label">Alamat</label>
                        <div class="col-sm-7">
                          <input type="text" class="form-control" id="alamatPuskesmas" required>
                        </div>
                    </div>

                    <div class="mb-3 row px-4">
                        <label for="NoTelepon" class="col-sm-5 col-form-label">No. Telepon</label>
                        <div class="col-sm-7">
                          <input type="text" class="form-control" id="NoTelepon">
                        </div>
                    </div>

                    <div class="mb-3 row px-4">
                        <label for="linkMaps" class="col-sm-5 col-form-label">Maps</label>
                        <div class="col-sm-7">
                          <input type="text" class="form-control" id="linkMaps">
                        </div>
                    </div>
                </form>
            </div>

            <div class="col-sm-6">
                <form>
                    <div class="mb-3 row px-4">
                        <label for="Poli" class="col-sm-5 col-form-label">Poli</label>
                        <div class="col-sm-7">
                          <input type="text" class="form-control" id="Poli">
                        </div>
                    </div>

                    <div class="mb-3 row px-4">
                        <label for="Denah" class="col-sm-5 col-form-label">Denah</label>
                        <div class="col-sm-7">
                          <input type="text" class="form-control" id="Denah">
                        </div>
                    </div>

                    <div class="mb-3 row px-4">
                        <label for="Foto" class="col-sm-5 col-form-label">Foto</label>
                        <div class="col-sm-7">
                          <input type="text" class="form-control" id="Foto">
                        </div>
                    </div>

                    <div class="mb-3 row px-4">
                        <label for="IdName" class="col-sm-5 col-form-label">IdName</label>
                        <div class="col-sm-7">
                          <input type="text" class="form-control" id="IdName" required>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        
        <div class="d-flex justify-content-center">
            <button id="submit" type="submit" class="btn btn-primary mt-3 px-5 fw-bold">Daftar</button>
        </div>
    </div>

    <footer class="footer-admin">
      <footer-admin></footer-admin>
    </footer>
      `;
  },

  async afterRender() {
    // const res = await axios('https://respon-backend.vercel.app/pasien/list');
    // let datalist = '';
    // res.data.forEach((data) => {
    //   datalist += `
    //   <tbody>
    //     <tr>
    //       <th scope="row" class="text-center">${data.id}</th>
    //       <td class="text-center">${data.name}</td>
    //       <td class="text-center">${data.poli}</td>
    //       <td class="text-center">${data.tax}</td>
    //       <td class="d-flex justify-content-center">
    //         <button type="button" class="btn btn-warning">Edit</button>
    //         <button type="button" class="btn btn-danger" id="delete">Delete</button>
    //       </td>
    //     </tr>
    //   </tbody>
    //   `;
    //   document.querySelector('#tes').innerHTML = datalist;
    // });
    const namaPuskesmas = document.querySelector('#namaPuskesmas');
    const alamatPuskesmas = document.querySelector('#alamatPuskesmas');
    const NoTelepon = document.querySelector('#NoTelepon');
    const linkMaps = document.querySelector('#linkMaps');
    const Poli = document.querySelector('#Poli');
    const Denah = document.querySelector('#Denah');
    const Foto = document.querySelector('#Foto');
    const IdName = document.querySelector('#IdName');
    const btnSubmit = document.querySelector('#submit');

    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if (namaPuskesmas.value === '') {
        // eslint-disable-next-line no-alert
        // alert('Inputan tidak boleh ada yang kosong');
        // namaPuskesmas.value = '';
        // alamatPuskesmas.value = '';
      } else {
        axios.post(`https://respon-backend.vercel.app/puskesmas/add?namaPuskesmas=${namaPuskesmas.value}&alamatPuskesmas=${alamatPuskesmas.value}&noTelepon=${NoTelepon.value}&maps=${linkMaps.value}&poli=${Poli.value}&denah=${Denah.value}&foto=${Foto.value}&idName=${IdName.value}`)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        // eslint-disable-next-line no-alert
        alert('Inputan berhasil');
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
    daftar.classList.add('active');
  },
};

export default AdminPuskesmasDaftar;
