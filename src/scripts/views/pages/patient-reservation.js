import axios from 'axios';
import { Button } from 'bootstrap';

const Reservation = {
  async render() {
    // const token = await axios('http://localhost:3000/admin/list');
    
    // let uuid = '';
    
    // token.data.forEach((data) => {
    //   uuid += `${data.uuid}`;
    // });
    
    // console.log(uuid);
    return `
    <header id="header" class="fixed-top ">
      <app-bar></app-bar>
    </header>
    
    <div class="content" id="main-content">
        <section class="reservation section-bg">
            <div class="row height d-flex justify-content-center align-items-center">

                <div class="col-md-8">
                    <div class="section-title">
                        <h2>Cari Puskesmas</h2>
                    </div>
                    <div class="search">
                        <i class="fa fa-search"></i>
                        <input type="text" class="form-control" placeholder="Cari Puskesmas" id="cari-puskesmas">
                        <button class="btn" id="search">Search</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="list-puskesmas">
            <div class="container">
                <h3 class="section-title">DAFTAR PUSKESMAS</h3>
                <div class="row g-4" id="Puskesmas-list">                  

                </div>
            </div>
        </section>
    </div>
    `;
  },
     
  async afterRender() {
    const res = await axios('https://respon-backend.vercel.app/puskesmas/list');
    let datalist = '';
    // console.log(res);
    res.data.forEach((data) => {
      datalist += `
                    <div class="col-md-6 col-lg-4">
                        <div class="puskesmas-item rounded overflow-hidden">
                            <img class="img-fluid" src="${data.foto}"  alt="ini ambar" style="width: 100%; height: 20rem;>
                            <div class="position-relative p-4 pt-0">
                                <div class="puskesmas-icon">
                                    <i class="fa-solid fa-hospital fa-3x"></i>
                                </div>
                                <h4 class="mb-3">${data.namaPuskesmas}</h4>
                                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                                <a class="small fw-medium" href="#/detail-puskesmas/${data.idName}">Lanjut Daftar<i class="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
      `;
      document.querySelector('#Puskesmas-list').innerHTML = datalist;
    }); 

    const btnSearch = document.querySelector('#search');
    const cariPuskesmas = document.querySelector('#cari-puskesmas');

    btnSearch.addEventListener('click', (e) => {
      e.preventDefault();

      if (cariPuskesmas.value === '') {
        alert('anda belum mengisi puskesmas yang ingin dicari');
      } else {
        let kalimat = cariPuskesmas.value;
        let kataArray = kalimat.split(' ');

        // Menggabungkan kembali kata-kata dengan tanda "-" sebagai pemisah
        let kalimatBaru = kataArray.join('-');

        console.log(kalimatBaru);
        document.location.href = `/#/cari-puskesmas/${kalimatBaru}`;
        // console.log(res);
        // document.getElementById('Puskesmas-list').style.display = 'none';
        // document.getElementById('Puskesmas-list1').style.display = 'block';
      }
    });
  },
};
     
export default Reservation;
