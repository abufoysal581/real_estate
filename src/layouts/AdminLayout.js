import React from 'react';
import Header from './include/header';
import Sidebar from './include/sidebar';
import Footer from './include/footer';


// import './assets/node_modules/bootstrap/css/bootstrap.min.css';
// import './assets/node_modules/perfect-scrollbar/css/perfect-scrollbar.css';
// import './assets/node_modules/morrisjs/morris.css';
// import './assets/node_modules/c3-master/c3.min.css';
// import './assets/css/style.css';
// import './assets/css/pages/dashboard1.css';
// import './assets/css/colors/default.css';




function AdminLayout({children}) {
  return (
    <div className="wrapper">
    {/* <!-- Sidebar --> */}
    <Sidebar />
    {/* <!-- End Sidebar --> */}

    <div className="main-panel">
    <Header />

      <div className="container">
      <main>{children}</main>
      </div>
       {/* <!-- Footer --> */}
       <Footer />
    </div>

    
  </div>
  )
}

export default AdminLayout