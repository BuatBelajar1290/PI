import axios from 'axios';

const AdminDokterDaftar = {
  async render() {
    return `
    <header id="header" class="fixed-top ">
      <admin-bar></admin-bar>
    </header>

    <div class="container shadow bg-light p-3 my-5 rounded-4">
        <h3 class="text-center mt-3 mb-5">ISI DATA DOKTER</h3> 
        <div class="row">
            <div class="col-sm-6">
                <form>
                    <div class="mb-3 row px-4">
                        <label for="namaDokter" class="col-sm-5 col-form-label">Nama Dokter</label>
                        <div class="col-sm-7">
                          <input type="text" class="form-control" id="namaDokter">
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
                          <input type="text" class="form-control" id="NoTelepon">
                        </div>
                    </div>

                    <div class="mb-3 row px-4">
                        <label for="linkMaps" class="col-sm-5 col-form-label">Jam Praktek</label>
                        <div class="col-sm-7">
                          <input type="text" class="form-control" id="linkMaps" disabled>
                        </div>
                    </div>

                    <div class="mb-3 row px-4">
                        <label for="foto" class="col-sm-5 col-form-label">Image</label>
                        <div class="col-sm-7">
                          <input type="file" class="form-control" id="foto" accept="image/*" src="../">
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
    const namaDokter = document.querySelector('#namaDokter');
    const alamatDokter = document.querySelector('#alamatDokter');
    const NoTelepon = document.querySelector('#NoTelepon');
    const linkMaps = document.querySelector('#linkMaps');
    const Poli = document.querySelector('#Poli');
    const Denah = document.querySelector('#Denah');
    const Foto = document.querySelector('#Foto');
    const IdName = document.querySelector('#IdName');
    const btnSubmit = document.querySelector('#submit');

    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if (namaDokter.value === '') {
        // eslint-disable-next-line no-alert
        alert('Inputan tidak boleh ada yang kosong');
        // namaPuskesmas.value = '';
        // alamatPuskesmas.value = '';
      } else {
        axios.post(`https://respon-backend.vercel.app/dokter/add?namaDokter=${namaDokter.value}&poli=${Poli.value}&puskesmasId=puskesmas-rajeg`)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        // eslint-disable-next-line no-alert
        alert('Inputan berhasil');
        namaDokter.value = '';
        NoTelepon.value = '';
        linkMaps.value = '';
        Poli.value = '';
        Denah.value = '';
        Foto.value = '';
        IdName.value = '';
      }
    });

    const daftar = document.querySelector('#daftar');
    daftar.classList.add('active');
  },
};

export default AdminDokterDaftar;
