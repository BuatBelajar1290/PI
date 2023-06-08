import axios from 'axios';
import UrlParser from '../../routes/url-parser';

const AdminPuskesmasDetail = {
  async render() {
    return `
    <header id="header" class="fixed-top ">
      <admin-bar></admin-bar>
    </header>

    <div class="content" id="main-content">
      <section id="detail" class="detail">
        <div class="container" id="Puskesmas-detail">
    
        </div>
      </section>
    </div>

    <div class="container mt-5">
      <div class="d-flex justify-content-end pe-3" id="Button-New">
    </div>
    
    <table class="table table-light table-bordered table-hover">
      <thead class="table-warning">
        <tr>
          <th scope="col" class="text-center py-3">Id</th>
          <th scope="col" class="text-center">Nama Dokter</th>
          <th scope="col" class="text-center">No Telepon</th>
          <th scope="col" class="text-center">Poli</th>
          <th scope="col" class="text-center">Action</th>
        </tr>
      </thead>
      <tbody id="tes">
      
      </tbody>
    </table>
    </div>

    <footer>
      <footer-bar></footer-bar>
    </footer>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const res = await axios.get(`https://respon-backend.vercel.app/puskesmas/listInti?idName=${url.id}`);
    const resp = await axios.get(`https://respon-backend.vercel.app/dokter/list?puskesmasId=${url.id}`);
    
    let infoPuskesmas = '';
    let dataDokter = '';
    let ButtonNew = '';

    res.data.forEach((data) => {
      infoPuskesmas += `
                <div class="p-1 mb-4 bg-light rounded-3">
                  <div class="container-fluid py-5">
                    <h1 class="display-5 fw-bold text-center">${data.namaPuskesmas}</h1>
                  </div>
                </div>

                <div class="row content">
                  <div class="col-lg-6">
                    <h2>Informasi Puskesmas</h2>
                    <div class="row my-4 ps-5">
                      <table class="table-borderless">
                        <tbody>
                          <tr>
                            <td style="width:30%"><strong>Nama Puskesmas</strong></td>
                            <td>${data.namaPuskesmas}</td>
                          </tr>
                          <tr>
                            <td><strong>Alamat</strong></td>
                            <td>${data.alamatPuskesmas}</td>
                          </tr>
                          <tr>
                            <td><strong>No. Telepon</strong></td>
                            <td>${data.noTelepon}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
            
                  <div class="col-lg-6 pt-4 pt-lg-0">
                    <iframe src="${data.maps}" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe>
                  </div>
                </div>
      `;
    });

    resp.data.forEach((data) => {
      dataDokter += `
                  <tbody>
                    <tr>
                      <td class="text-center">${data.id}</td>
                      <td class="text-center">${data.namaDokter}</td>
                      <td class="text-center">${data.noTelepon}</td>
                      <td class="text-center">${data.poli}</td>
                      <td class="d-flex justify-content-center">
                          <a href="#/admin-detail-puskesmas/${data.puskesmasId}/edit/${data.id}"><button type="button" class="btn btn-success me-3">Edit</button></a>
                          <a href="#/admin-detail-puskesmas/${data.puskesmasId}/delete/${data.id}"><button type="button" id="delete" class="btn btn-danger" value="${data.id}">Hapus</button></a>
                      </td>
                    </tr>
                  </tbody>
      `;
    });
    
    res.data.forEach((data) => {
      ButtonNew += `
                  <a href="#/admin-daftar-dokter/${data.idName}/daftar"><button type="button" class="btn btn-success mb-3">New +</button></a>
      `;
    });

    document.querySelector('#Puskesmas-detail').innerHTML = infoPuskesmas;
    document.querySelector('#tes').innerHTML = dataDokter;
    document.querySelector('#Button-New').innerHTML = ButtonNew;

    // eslint-disable-next-line prefer-destructuring
    const Id = document.querySelector('#id');
    const btnDelete = document.querySelector('#delete');

    // btnDelete.addEventListener('click', (e) => {
    //   e.preventDefault();
    //   console.log(req.params.id);
    //   // if (Id.value === '') {
    //   //   // eslint-disable-next-line no-alert
    //   //   alert('Inputan tidak boleh ada yang kosong');
    //   //   // namaPuskesmas.value = '';
    //   //   // alamatPuskesmas.value = '';
    //   // } else {
    //   //   axios.delete(`http://localhost:3000/Dokter/delete?id=${Id.value}`)
    //   //     .then(function (response) {
    //   //       console.log(response);
    //   //     })
    //   //     .catch(function (error) {
    //   //       console.log(error);
    //   //     });
    //   //   // eslint-disable-next-line no-alert
    //   //   alert('delete berhasil');
    //   //   // document.location.reload();
    //   // }
    // });

    // const Delete = document.querySelector('#delete');
    // Delete.classList.remove('active');
  },
};
export default AdminPuskesmasDetail;