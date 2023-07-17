import Contact from '../views/pages/patient-contact';
import Detail from '../views/pages/patient-detail-puskesmas';
import Home from '../views/pages/patient-home';
import SignIn from '../views/pages/patient-sign-in';
import Reservation from '../views/pages/patient-reservation';

import AdminHome from '../views/Admin/admin-home';
import AdminContact from '../views/Admin/admin-contact';
import AdminContactDelete from '../views/Admin/admin-contact-delete';

import AdminPuskesmasData from '../views/Admin/admin-puskesmas-data';
import AdminPuskesmasDataSearch from '../views/Admin/admin-puskesmas-data-search';
import AdminPuskesmasDetail from '../views/Admin/admin-puskesmas-detail';
import AdminPuskesmasDaftar from '../views/Admin/admin-puskesmas-daftar';
import AdminPuskesmasEdit from '../views/Admin/admin-puskesmas-edit';
import AdminPuskesmasDelete from '../views/Admin/admin-puskesmas-delete';

import AdminDokterEdit from '../views/Admin/admin-dokter-edit';
import AdminDokterDaftar from '../views/Admin/admin-dokter-daftar';
import AdminDokterDelete from '../views/Admin/admin-dokter-delete';
import ReservationSearch from '../views/pages/patient-reservation-search';

const routes = {
  '/': Home,
  '/home': Home,
  '/cari-puskesmas': Reservation,
  '/cari-puskesmas/:id': ReservationSearch,
  '/kontak': Contact,
  '/masuk': SignIn,
  '/detail-puskesmas/:id': Detail,

  '/admin-home': AdminHome,
  '/admin-contact': AdminContact,
  '/admin-contact-delete/:id': AdminContactDelete,
  
  '/admin-daftar-puskesmas': AdminPuskesmasDaftar,
  '/admin-data-puskesmas': AdminPuskesmasData,
  '/admin-data-puskesmas-search/:id': AdminPuskesmasDataSearch,
  '/admin-data-puskesmas/:id/edit': AdminPuskesmasEdit,
  '/admin-data-puskesmas/:id/delete': AdminPuskesmasDelete,
  '/admin-detail-puskesmas/:id': AdminPuskesmasDetail,
  
  '/admin-daftar-dokter/:id/daftar': AdminDokterDaftar,
  '/admin-detail-puskesmas/:id/edit/:detail': AdminDokterEdit,
  '/admin-detail-puskesmas/:id/delete/:detail': AdminDokterDelete,
}; 

export default routes;
