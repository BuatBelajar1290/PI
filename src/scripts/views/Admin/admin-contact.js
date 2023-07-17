import axios from 'axios';
import Swal from 'sweetalert2';

const AdminContact = {
  async render() {
    return `
    <header id="header" class="fixed-top ">
      <admin-bar></admin-bar>
    </header>
    
    <div class="content" id="main-content">
        <section class="list-puskesmas">
            <div class="container">
                <h3 class="section-title">Pesan</h3>
                <div class="row g-4" id="pesan">                  

                </div>
            </div>
        </section>
    </div>
    `;
  },
     
  async afterRender() {
    const res = await axios('https://respon-backend.vercel.app/message/list');
    let datalist = '';
    // console.log(res);
    res.data.forEach((data) => {
      datalist += `
                    <div class="col-md-6 col-lg-4">
                        <div class="puskesmas-item rounded overflow-hidden">
                            <div class="position-relative p-4 pt-0">
                                <h6 class="mt-3 text-body" id="nama">Nama : ${data.Nama}</h6>
                                <h6 class="text-body">Email    : ${data.Email}</h6>
                                <h6 class="text-body">Subject   : ${data.Subject}</h6>
                                <div class="d-flex justify-content-end">
                                  <a class="small fw-medium btn btn-primary" href="/#/admin-contact-delete/${data.id}">Detail</a>
                                </div>
                            </div>
                        </div>
                    </div>
      `;
      document.querySelector('#pesan').innerHTML = datalist;
    }); 
  },
};
     
export default AdminContact;
