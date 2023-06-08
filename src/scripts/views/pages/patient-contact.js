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
            <p>Jika Anda memiliki pertanyaan terkait pelayanan RESPON/kami, sliakan mengisi form dibawah berikut</p>
          </div>

          <div class="row">
            <div class="col-lg-5 d-flex align-items-stretch">
              <div class="info">
                <div class="address">
                  <i class="fa-solid fa-location-dot"></i>
                  <h4>Lokasi:</h4>
                  <p>Jl. Batik Kumeli No.50, Sukaluyu,
                  Kec. Cibeunying Kaler, Kota Bandung
                  Jawa Barat 40123</p>
                </div>

                <div class="email">
                  <i class="fa-solid fa-envelope"></i>
                  <h4>Email:</h4>
                  <p>respon@gmail.com</p>
                </div>

                <div class="phone">
                  <i class="fa-solid fa-phone"></i>
                  <h4>Telepon:</h4>
                  <p>+62-8569-7845-392</p>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9569524777266!2d107.63166691459269!3d-6.895752595017268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7a55a715555%3A0xb8bb411d2516aad6!2sDicoding%20Academy!5e0!3m2!1sid!2sid!4v1656566623244!5m2!1sid!2sid" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe>
              </div>
            </div>

        <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
          <form action="" method="post" role="form" class="email-form">
            <div class="row">
              <div class="form-group col-md-6">
                <label for="name">Nama</label>
                <input placeholder="Masukkan Nama Anda" type="text" name="name" class="form-control" id="name" required>
              </div>
              <div class="form-group col-md-6">
                <label for="name">Email</label>
                <input placeholder="Masukkan Email Anda" type="email" class="form-control" name="email" id="email" required>
              </div>
            </div>
            <div class="form-group">
              <label for="name">Subjek</label>
              <input placeholder="Masukkan Subjek Pesan" type="text" class="form-control" name="subject" id="subject" required>
            </div>
            <div class="form-group">
              <label for="name">Pesan</label>
              <textarea placeholder="Masukkan Pesan Anda" class="form-control" name="message" rows="10" required></textarea>
            </div>
            <div class="my-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Pesan Anda Telah Terkirim. Terima Kasih</div>
            </div>
            <div class="text-center"><button type="submit">Kirim Pesan</button></div>
          </form>
        </div>

      </div>

    </div>
  </section><!-- End Contact Section -->
</div>
      `;
  },
   
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};
   
export default Contact;
