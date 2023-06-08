import axios from 'axios';

const AdminPuskesmasData = {
  async render() {
    return `
    <header id="header" class="fixed-top ">
      <admin-bar></admin-bar>
    </header>

    <div class="container mt-5">
      <div class="row g-3 d-flex justify-content-between">
        <div class="col-auto"">
          <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" placeholder="Search" style="width: 150%;">
          <button class="btn btn-info" id="search mb-5">Search</button>
        </div>

        <div class="search">
                        <i class="fa fa-search"></i>
                        <input type="text" class="form-control" placeholder="Cari Puskesmas" id="cari-puskesmas">
                        <button class="btn" id="search">Search</button>
                    </div>

        <div class="col-auto me-2">
            <a href="#/admin-daftar-puskesmas"><button type="button" class="btn btn-success mb-3">New +</button></a>
        </div>
      </div>
    </div>

    <div class="content pd-5" id="main-content">
      <div class="container">
        <table class="table table-light table-bordered table-hover" id="example" style="widht:100%;">
          <thead class="table-warning">
            <tr>
              <th scope="col" class="text-center">No. Urut</th>
              <th scope="col" class="text-center">Nama Puskesmas</th>
              <th scope="col" class="text-center">No Telepon</th>
              <th scope="col" class="text-center">Id Name</th>
              <th scope="col" class="text-center">Action</th>
            </tr>
          </thead>
          <tbody id="tes">

          </tbody>
        </table>
      </div>
    </div>

    <footer>
      <footer-bar></footer-bar>
    </footer>
      `;
  },

  async afterRender() {
    const btnEdit = document.querySelector('#edit');

    const res = await axios('https://respon-backend.vercel.app/puskesmas/list');
    // console.log(res.data[0]);
    let datalist = '';
    let ButtonNew = '';
    res.data.forEach((data) => {
      datalist += `
      <tbody>
        <tr>
          <th scope="row" class="text-center">${data.id}</th>
          <td class="text-center">${data.namaPuskesmas}</td>
          <td class="text-center">${data.noTelepon}</td>
          <td class="text-center">${data.idName}</td>
          <td class="d-flex justify-content-center">
            <a href="#/admin-detail-puskesmas/${data.idName}"><button type="button" class="btn btn-info">Info</button></a>
            <a href="#/admin-data-puskesmas/${data.id}/edit"><button type="button" class="btn btn-success me-3 ms-3">Edit</button></a>
            <a href="#/admin-data-puskesmas/${data.id}/delete"><button type="button" id="delete" class="btn btn-danger" value="${data.id}">Hapus</button></a>
          </td>
        </tr>
      </tbody>
      `;
      document.querySelector('#tes').innerHTML = datalist;
    });

    // ButtonNew += `
    //               <a href="#/admin-daftar-puskesmas"><button type="button" class="btn btn-success mb-3">New +</button></a>
    //   `;
    // document.querySelector('#Button-New').innerHTML = ButtonNew;
  },
};

export default AdminPuskesmasData;
