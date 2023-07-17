import axios from 'axios';
import { nanoid } from 'nanoid';
import Swal from 'sweetalert2';

const SignIn = {
  async render() {
    return `
    <header id="header" class="fixed-top ">
      <app-bar></app-bar>
    </header>

    <div class="content" id="main-content">
      <section class="contact section-bg">
        <div class="container">

          <div class="section-title">
            <h2>Masuk</h2>
            <p>Masukkan Akun Anda Untuk Melakukan Reservasi</p>
          </div>

          <div class="row">
            <div class="col-lg-5 d-flex align-items-stretch">
              <div class="info">
                <img src="../images/image5.jpg" class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" alt="Dokter"/>
              </div>
            </div>

            <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form action="" method="post" role="form" class="email-form">
                <div class="row">
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input placeholder="Masukkan Email Anda" type="email" class="form-control" name="email" id="email" required>
                  </div>
                </div>

                <div class="form-group">
                  <label for="name">Password</label>
                  <input placeholder="Masukkan Password Anda" type="password" class="form-control" name="password" id="password" required>
                </div>
                
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                </div>
                
                <div class="text-center">
                  <button type="submit"  id="submit">
                    <a style="color: white;">Masuk</a>
                  </button>
                </div>
              </form>
            </div>
          </div>
          
        </div>
      </section>
    </div>
    `;
  },
     
  async afterRender() {
    const res = await axios('https://respon-backend.vercel.app/admin/list');
    
    let username = '';
    let sandi = '';
    
    res.data.forEach((data) => {
      username += `${data.Email}`;
    });
    
    res.data.forEach((data) => {
      sandi += `${data.Password}`;
    });
    
    // let btnLogin = '';
    // btnLogin += `
    //         <a style="color: white;">Masuk</a>
    // `;
    // document.querySelector('#submit').innerHTML = btnLogin;

    const uuid = nanoid(16);
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const btnMasuk = document.querySelector('#submit');

    btnMasuk.addEventListener('click', (e) => {
      e.preventDefault();

      if (email.value === '' || password.value === '') {
        if (email.value === '' && password.value === '') {
          Swal.fire(
            'Gagal Login',
            'Email dan Password Belum Terisi',
            'error'
          );
        } else if (email.value === '') {
          Swal.fire(
            'Gagal Login',
            'Email Belum Terisi',
            'error'
          );
        } else if (password.value === '') {
          Swal.fire(
            'Gagal Login',
            'Password Belum Terisi',
            'error'
          );
        } 
        // document.location.reload();
      } else if (email.value === `${username}` && password.value === `${sandi}`) {
        axios.put(`https://respon-backend.vercel.app/admin/update?Email=${email.value}&uuid=${uuid}`)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1800,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          }
        });
          
        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        });

        console.log('masuk pak eko');
        setTimeout(() => {
          document.location.href = '/#/admin-home';
        }, 2000);
      } else {
        Swal.fire(
          'Gagal Login',
          'Email Atau Password Salah',
          'error'
        );
      } 
    });
    // btnMasuk.addEventListener(onclick = (e) => {
    //   e.preventDefault();
    //   if (email.value === '' && password.value === '') {
    //     // eslint-disable-next-line no-alert
    //     alert('Email atau Password Salah !!!');
    //   } else {
    //     alert('Berhasil Masuk');
    //     document.location.href = '/#/admin-home';
    //   }
    // });
  },
};
     
export default SignIn;
