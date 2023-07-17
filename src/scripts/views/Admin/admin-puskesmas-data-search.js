import UrlParser from '../../routes/url-parser';
import axios from 'axios';

const AdminPuskesmasDataSearch = {
  async render() {
    return `
    <header id="header" class="fixed-top ">
      <admin-bar></admin-bar>
    </header>

    <div class="content pd-5" id="main-content">
      <h1 class="text-center pt-5">List Puskesmas</h1>

      <nav class="navbar" style="background-color: #ffffff;">
        <div class="container">
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" id="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" id="search-btn" type="submit">Search</button>
          </form>
          <a href="#/admin-daftar-puskesmas"><button type="button" class="btn btn-success">New +</button></a>
        </div>
      </nav>

      <div class="container">
        <table class="table table-bordered table-sm table-striped" id="example" style="widht:100%;">
          <thead class="table-warning">
              <th scope="col" class="text-center">No. Urut</th>
              <th scope="col" class="text-center">Nama Puskesmas</th>
              <th scope="col" class="text-center">No Telepon</th>
              <th scope="col" class="text-center">Action</th>
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
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const res = await axios(`https://respon-backend.vercel.app/puskesmas/listInti?idName=%${url.id}%`);
    console.log(res);
    let datalist = '';

    res.data.forEach((data) => {
      datalist += `
      <tbody>
        <tr>
          <th scope="row" class="text-center">${data.id}</th>
          <td class="text-center">${data.namaPuskesmas}</td>
          <td class="text-center">${data.noTelepon}</td>
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
    
    const search = document.querySelector('#search');
    const btnSearch = document.querySelector('#search-btn');

    btnSearch.addEventListener('click', (searchBtn) => {
      searchBtn.preventDefault();

      if (search.value === '') {
        document.location.href = '/#/admin-data-puskesmas';
      } else {
        document.location.href = `/#/admin-data-puskesmas-search/${search.value}`;
      }
    });
  },
};

export default AdminPuskesmasDataSearch;
