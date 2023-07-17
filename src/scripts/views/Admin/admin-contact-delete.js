/* eslint-disable no-alert */
import axios from 'axios';
import UrlParser from '../../routes/url-parser';
import Swal from 'sweetalert2';

const AdminContactDelete = {
  async render() {
    return `
    <header id="header" class="fixed-top ">
      <admin-bar></admin-bar>
    </header>

    <div class="container shadow bg-light p-3 my-5 rounded-4">
        <h3 class="text-center mt-">Pesan</h3> 
        <div class="row justify-content-center" id="pesan">

        </div>
        
        <div class="d-flex justify-content-center" id="button"> 

        </div>
    </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const res = await axios.get(`https://respon-backend.vercel.app/message/listInti?id=${url.id}`);
    let datalist = '';
    res.data.forEach((data) => {
      datalist += `
      <h6 class="text-dark">Nama   : ${data.Nama} </h6> 
      <h6 class="mt-3 text-dark">Email  : ${data.Email}</h6> 
      <h6 class="mt-3 text-dark">Subject  : ${data.Subject}</h6>
      <p class="mt-3 text-dark">${data.Pesan}</p>
      `;
      document.querySelector('#pesan').innerHTML = datalist;
    });

    let button = '';
    res.data.forEach((data) => {
      button += `
      <a class="btn btn-danger mt-3 px-5 fw-bold" id="delete">Delete</a>
      <a class="btn btn-success mt-3 ms-3 px-5 fw-bold" href="https://mail.google.com/mail/u/2/#inbox">Balas</a>
      `;
      document.querySelector('#button').innerHTML = button;
    });

    let id = '';
    res.data.forEach((data) => {
      id += `${data.id}`;
    });

    const btnDelete = document.querySelector('#delete');

    btnDelete.addEventListener('click', (e) => {
      e.preventDefault();

      if (id === '') {
        console.log('kok bisa idnya gk ada');
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
            axios.delete(`https://respon-backend.vercel.app/message/delete?id=${id}`)
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

            setTimeout(() => {
              document.location.href = '/#/admin-contact';
            }, 3000);
          }
        });
      }
    });
  },
};

export default AdminContactDelete;
