class AdminBar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
    
  render() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg  navbar-light py-lg-0 px-lg-5">
        <a href="/" class="logo me-auto"><img src="./images/logo/respon-logo1.png" alt="Respon Logo" class="img-fluid" style="height:100px; width:200px;"></a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ms-auto p-4 p-lg-0">
            <li><a href="#/admin-home" class="nav-item nav-link">Home</a></li>
            <li><a href="#/admin-data-puskesmas" class="nav-item nav-link">Puskesmas</a></li>
            <li><a href="#/admin-contact"  class="nav-item nav-link">Kontak</a></li>
            <li><a href="#/home" class="nav-item nav-link">Logout</a></li>
          </ul>
          <ul class="navbar-nav ms-auto">
          </ul>
        </div>
      </nav>
        `;
  }
}
    
customElements.define('admin-bar', AdminBar);
