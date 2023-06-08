const Home = {
  async render() {
    return `
    <header id="header" class="fixed-top ">
      <app-bar></app-bar>
    </header>
     
    <div class="content" id="main-content">
      <hero-bar></hero-bar>
      <section id="services" class="services section-bg">
        <div class="container">
          <div class="section-title">
            <h2>Pelayanan</h2>
            <p>..... memberikan beberapa pelayanan antara lain :</p>
          </div>
          
          <div class="row">
            <div class="col-xl-3 col-md-6 d-flex align-items-stretch">
              <div class="icon-box">
                <div class="icon"><i class="fa-solid fa-book-medical"></i></div>
                <h4><a href="">Pencarian Online</a></h4>
                <p>Pencarian Puskesmas dilakukan secara online tanpa perlu datang ke lokasi</p>
              </div>
            </div>
  
            <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0">
              <div class="icon-box">
                <div class="icon"><i class="fa-solid fa-map-location-dot"></i></div>
                <h4><a href="">Maps Puskesmas</a></h4>
                <p>Melakukan pengecekan lokasi puskesmas yang dituju</p>
              </div>
            </div>
  
            <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0">
              <div class="icon-box">
                <div class="icon"><i class="fa-solid fa-hourglass-start"></i></div>
                <h4><a href="">Hemat Waktu</a></h4>
                <p>Dapat menghemat waktu dengan melakukan semua secara online</p>
              </div>
            </div>
  
          </div>
  
        </div>
      </section>
    </div>
    `;
  },

  async afterRender() {
    // 
  },
};

export default Home;
