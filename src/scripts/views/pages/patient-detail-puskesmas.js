import axios from 'axios';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
    <header id="header" class="fixed-top ">
      <app-bar></app-bar>
    </header>
    
    <div class="content" id="main-content">
        <section id="detail" class="detail">
            <div class="container" id="Puskesmas-detail">
            
            </div>
          </section>

          <section class="list-puskesmas">
            <div class="container">
                <h3 class="section-title">DAFTAR DOKTER</h3>
                <div class="row g-4" id="Dokter-detail">                  

                </div>
            </div>
        </section>
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const res = await axios.get(`https://respon-backend.vercel.app/puskesmas/listInti?idName=${url.id}`);
    const resp = await axios.get(`https://respon-backend.vercel.app/dokter/list?puskesmasId=${url.id}`);
    console.log(resp);
    let datalist = '';
    let dataDokter = '';
    res.data.forEach((data) => {
      datalist += `
      <div class="p-1 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold text-center">${data.namaPuskesmas}</h1>
          </div>
      </div>
      <div class="row content">
      <div class="col-lg-6">
        <h2>Informasi Puskesmas</h2>
        <div class="row my-4 ps-5">
          <table class="table-borderless">
            <tbody>
              <tr>
                <td style="width:30%"><strong>Nama Puskesmas</strong></td>
                <td>${data.namaPuskesmas}</td>
              </tr>
              <tr>
                <td><strong>Alamat</strong></td>
                <td>${data.alamatPuskesmas}</td>
              </tr>
              <tr>
                <td><strong>No. Telepon</strong></td>
                <td>${data.noTelepon}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="col-lg-6 pt-4 pt-lg-0">
        <iframe src="${data.maps}" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe>
      </div>
  </div>
      `;
    });

    resp.data.forEach((data) => {
      dataDokter += `
      <div class="col-md-6 col-lg-4">
                        <div class="puskesmas-item rounded overflow-hidden">
                            <img class="img-fluid" src="./images/image3.jpg"  alt="">
                            <div class="position-relative p-4 pt-0">
                                <div class="puskesmas-icon">
                                    <i class="fa-solid fa-hospital fa-3x"></i>
                                </div>
                                <h4 class="mb-3">${data.namaDokter}</h4>
                                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                                <a class="small fw-medium" href="#/detail-puskesmas/${data.idName}">Lanjut Daftar<i class="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
      `;
      document.querySelector('#Puskesmas-detail').innerHTML = datalist;
      document.querySelector('#Dokter-detail').innerHTML = dataDokter;
    });
  },
};

export default Detail;
