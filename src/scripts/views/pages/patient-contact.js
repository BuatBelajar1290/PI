import Swal from 'sweetalert2';
import axios from 'axios';

const Contact = {
  async render() {
    return `
    <header id="header" class="fixed-top ">
      <app-bar></app-bar>
    </header>
    
    <div class="content" id="main-content">
      <section class="contact section-bg">
        <div class="container">
          <div class="section-title">
            <h2>Kontak</h2>
            <p>Jika Anda memiliki pertanyaan terkait pelayanan kami, sliakan mengisi form dibawah berikut</p>
          </div>

          <div class="row">
            <div class="col-lg-5 d-flex align-items-stretch">
              <div class="info">
                <div class="address">
                  <i class="fa-solid fa-location-dot"></i>
                  <h4>Lokasi:</h4>
                  <p>Perum Nuansa Mekarsari A13 No 34
                  Kec. Rajeg, Kabupaten Tangerang,
                  Banten 15540</p>
                </div>

                <div class="email">
                  <i class="fa-solid fa-envelope"></i>
                  <h4>Email:</h4>
                  <p>ilhamoktavian74@gmail.com</p>
                </div>

                <div class="phone">
                  <i class="fa-solid fa-phone"></i>
                  <h4>Telepon:</h4>
                  <p>+62-8389-2366-118</p>
                </div>
              </div>
            </div>

        <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
          <form action="" method="post" role="form" class="email-form">
            <div class="row">
              <div class="form-group col-md-6">
                <label for="name">Nama</label>
                <input placeholder="Masukkan Nama Anda" type="text" name="name" class="form-control" id="nama" required>
              </div>

              <div class="form-group col-md-6">
                <label for="name">Email</label>
                <input placeholder="Masukkan Email Anda" type="email" class="form-control" name="email" id="email" required>
              </div>
            </div>

            <div class="form-group">
              <label for="name">Subject</label>
                <select class="form-select" id="subject">
                  <option selected></option>
                  <option value="Mendaftarkan Puskesmas">Mendaftarkan Puskesmas</option>
                  <option value="Laporan Bug">Laporan Bug</option>
                  <option value="Bertanya Seputar Benefit">Bertanya Seputar Benefit</option>
                </select>
            </div>
            
            <div class="form-group">
              <label for="name">Pesan</label>
                <textarea placeholder="Masukkan Pesan Anda" class="form-control" name="message" rows="10" id="pesan" maxlength="300" required></textarea>
            </div>

            <div class="text-center">
              <button type="submit" id="button">Kirim Pesan</button>
            </div>
          </form>
        </div>

      </div>

    </div>
  </section><!-- End Contact Section -->
</div>
      `;
  },
   
  async afterRender() {
    const nama = document.querySelector('#nama');
    const email = document.querySelector('#email');
    const subject = document.querySelector('#subject');
    const pesan = document.querySelector('#pesan');
    const btnSubmit = document.querySelector('#button');

    btnSubmit.addEventListener('click', (klik) => {
      klik.preventDefault();

      if (nama.value === '' || email.value === '' || subject.value === '' || pesan.value === '') {
        if (nama.value === '') {
          Swal.fire(
            'Gagal',
            'Nama Belum Terisi',
            'error'
          );
        } else if (email.value === '') {
          Swal.fire(
            'Gagal',
            'Email Belum Terisi',
            'error'
          );
        } else if (subject.value === '') {
          Swal.fire(
            'Gagal',
            'Subject Belum Terisi',
            'error'
          );
        } else if (pesan.value === '') {
          Swal.fire(
            'Gagal',
            'Pesan Belum Terisi',
            'error'
          );
        } else {
          Swal.fire(
            'Gagal',
            'Isi Semua Form Dulu',
            'error'
          );
        }
      } else {
        axios.post(`https://respon-backend.vercel.app/message/add?Nama=${nama.value}&Email=${email.value}&Subject=${subject.value}&Pesan=${pesan.value}`)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        Swal.fire({
          icon: 'success',
          title: 'Pesan Anda Telah Terkirim. Terima Kasih',
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  },
};
   
export default Contact;
