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

    {/* <!-- Custom template | don't include it in your project! --> */}
    {/* <div className="custom-template">
      <div className="title">Settings</div>
      <div className="custom-content">
        <div className="switcher">
          <div className="switch-block">
            <h4>Logo Header</h4>
            <div className="btnSwitch">
              <button
                type="button"
                className="selected changeLogoHeaderColor"
                data-color="dark"
              ></button>
              <button
                type="button"
                className="changeLogoHeaderColor"
                data-color="blue"
              ></button>
              <button
                type="button"
                className="changeLogoHeaderColor"
                data-color="purple"
              ></button>
              <button
                type="button"
                className="changeLogoHeaderColor"
                data-color="light-blue"
              ></button>
              <button
                type="button"
                className="changeLogoHeaderColor"
                data-color="green"
              ></button>
              <button
                type="button"
                className="changeLogoHeaderColor"
                data-color="orange"
              ></button>
              <button
                type="button"
                className="changeLogoHeaderColor"
                data-color="red"
              ></button>
              <button
                type="button"
                className="changeLogoHeaderColor"
                data-color="white"
              ></button>
              <br />
              <button
                type="button"
                className="changeLogoHeaderColor"
                data-color="dark2"
              ></button>
              <button
                type="button"
                className="changeLogoHeaderColor"
                data-color="blue2"
              ></button>
              <button
                type="button"
                className="changeLogoHeaderColor"
                data-color="purple2"
              ></button>
              <button
                type="button"
                className="changeLogoHeaderColor"
                data-color="light-blue2"
              ></button>
              <button
                type="button"
                className="changeLogoHeaderColor"
                data-color="green2"
              ></button>
              <button
                type="button"
                className="changeLogoHeaderColor"
                data-color="orange2"
              ></button>
              <button
                type="button"
                className="changeLogoHeaderColor"
                data-color="red2"
              ></button>
            </div>
          </div>
          <div className="switch-block">
            <h4>Navbar Header</h4>
            <div className="btnSwitch">
              <button
                type="button"
                className="changeTopBarColor"
                data-color="dark"
              ></button>
              <button
                type="button"
                className="changeTopBarColor"
                data-color="blue"
              ></button>
              <button
                type="button"
                className="changeTopBarColor"
                data-color="purple"
              ></button>
              <button
                type="button"
                className="changeTopBarColor"
                data-color="light-blue"
              ></button>
              <button
                type="button"
                className="changeTopBarColor"
                data-color="green"
              ></button>
              <button
                type="button"
                className="changeTopBarColor"
                data-color="orange"
              ></button>
              <button
                type="button"
                className="changeTopBarColor"
                data-color="red"
              ></button>
              <button
                type="button"
                className="selected changeTopBarColor"
                data-color="white"
              ></button>
              <br />
              <button
                type="button"
                className="changeTopBarColor"
                data-color="dark2"
              ></button>
              <button
                type="button"
                className="changeTopBarColor"
                data-color="blue2"
              ></button>
              <button
                type="button"
                className="changeTopBarColor"
                data-color="purple2"
              ></button>
              <button
                type="button"
                className="changeTopBarColor"
                data-color="light-blue2"
              ></button>
              <button
                type="button"
                className="changeTopBarColor"
                data-color="green2"
              ></button>
              <button
                type="button"
                className="changeTopBarColor"
                data-color="orange2"
              ></button>
              <button
                type="button"
                className="changeTopBarColor"
                data-color="red2"
              ></button>
            </div>
          </div>
          <div className="switch-block">
            <h4>Sidebar</h4>
            <div className="btnSwitch">
              <button
                type="button"
                className="changeSideBarColor"
                data-color="white"
              ></button>
              <button
                type="button"
                className="selected changeSideBarColor"
                data-color="dark"
              ></button>
              <button
                type="button"
                className="changeSideBarColor"
                data-color="dark2"
              ></button>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-toggle">
        <i className="icon-settings"></i>
      </div>
    </div> */}
    {/* <!-- End Custom template --> */}
  </div>
  )
}

export default AdminLayout