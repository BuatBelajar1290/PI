// Import Regenator
import 'regenerator-runtime';
// Import Bootsrap
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import css
import '../styles/main.css';
import '../styles/responsive.css';

import './components/app-bar';
import './components/footer-bar';
import './components/admin-footer';
import './components/hero-bar';
import './components/admin-bar';
import App from './views/app';

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

//  load (ketika halaman dimuat)
window.addEventListener('load', () => {
  // var el = document.getElementById('wrapper');
  // var toggleButton = document.getElementById('menu-toggle');

  // toggleButton.onclick = function () {
  //   el.classList.toggle('toggled');
  // };
  
  app.renderPage();
});
