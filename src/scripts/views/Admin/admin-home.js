const AdminHome = {
  async render() {
    return `
    <header id="header" class="fixed-top ">
      <admin-bar></admin-bar>
    </header>

    <div class="p-4 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5 text-center">
            <h1 class="display-6 fw-bold">Halo Ilham Oktavian</h1>
            <p class="fs-4">Selamat datang di dashboard admin RESPON(Reservasi Puskesmas Online)</p>
        </div>
    </div>
    
    <footer class="footer-admin">
      <footer-admin></footer-admin>
    </footer>
    `;
  },

  async afterRender() {
    // test
  },
};

export default AdminHome;
