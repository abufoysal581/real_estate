import React from 'react'
import { Link,useLocation } from 'react-router-dom'
function Sidebar() {

	const activeMenu=(e)=>{
        document.querySelectorAll('.submenu').forEach(
            function(e){
                e.classNameList.remove('active');
            }
        )
        const childElement = e.target.parentElement.querySelector('.submenu');
        if(childElement && childElement.classNameList.contains('submenu')){
            childElement.classNameList.add('active');
        }
    }

	const location = useLocation();
	const isLinkActive = (path)=>{
        return location.pathname == path ? 'active' : "";
    }
  return (
    <div className="sidebar" data-background-color="dark">
    <div className="sidebar-logo">
      {/* <!-- Logo Header --> */}
      <div className="logo-header" data-background-color="dark">
        <a href="" className="logo">
          <img
            src="assets/img/02 - PNG Property.png"
            alt="navbar brand"
            className="navbar-brand"
            height="100"
            width="200"
          />
        </a>
        <div className="nav-toggle">
          <button className="btn btn-toggle toggle-sidebar">
            <i className="gg-menu-right"></i>
          </button>
          <button className="btn btn-toggle sidenav-toggler">
            <i className="gg-menu-left"></i>
          </button>
        </div>
        <button className="topbar-toggler more">
          <i className="gg-more-vertical-alt"></i>
        </button>
      </div>
      {/* <!-- End Logo Header --> */}
    </div>
    <div className="sidebar-wrapper scrollbar scrollbar-inner">
      <div className="sidebar-content">
        <ul className="nav nav-secondary">
          <li className="nav-item active">
            <a
              data-bs-toggle="collapse"
              href="#dashboard"
              className="collapsed"
              aria-expanded="false"
            >
              <i className="fas fa-home"></i>
              <p>Dashboard</p>
              <span className="caret"></span>
            </a>
            <div className="collapse" id="dashboard">
              <ul className="nav nav-collapse">
                <li>
                <Link to="/" className="waves-effect waves-dark" aria-expanded="false"><i
                className="fa fa-question-circle"></i><span className="hide-menu">Dashboard 1</span></Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-section">
            <span className="sidebar-mini-icon">
              <i className="fa fa-ellipsis-h"></i>
            </span>
            <h4 className="text-section">Components</h4>
          </li>
          <li className="nav-item">
            <a data-bs-toggle="collapse" href="#base">
              <i className="fas fa-layer-group"></i>
              <p>Properties</p>
              <span className="caret"></span>
            </a>
            <div className="collapse" id="base">
              <ul className="nav nav-collapse">
                <li>
                <Link to="/Property/Addproperty" className="waves-effect waves-dark" aria-expanded="false"><i
                className="fa fa-question-circle"></i><span className="hide-menu">Add property</span></Link>
                </li>
                <li>
                <Link to="/Property" className="waves-effect waves-dark" aria-expanded="false"><i
                className="fa fa-question-circle"></i><span className="hide-menu">Property list</span></Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a data-bs-toggle="collapse" href="#sidebarLayouts">
              <i className="fas fa-th-list"></i>
              <p>Property requests</p>
              <span className="caret"></span>
            </a>
            <div className="collapse" id="sidebarLayouts">
              <ul className="nav nav-collapse">
                <li>
                <Link to="/Property_request/For_rent" className="waves-effect waves-dark" aria-expanded="false"><i
                className="fa fa-question-circle"></i><span className="hide-menu">For rent</span></Link>
                </li>
                <li>
                <Link to="/Property_request/For_buying" className="waves-effect waves-dark" aria-expanded="false"><i
                className="fa fa-question-circle"></i><span className="hide-menu">For buying</span></Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a data-bs-toggle="collapse" href="#forms">
              <i className="fas fa-pen-square"></i>
              <p>Admins</p>
              <span className="caret"></span>
            </a>
            <div className="collapse" id="forms">
              <ul className="nav nav-collapse">
                <li>
                  <a href="forms/forms.html">
                    <span className="sub-item">Master admin</span>
                  </a>
                </li>
                <li>
                <Link to="/Agents" className="waves-effect waves-dark" aria-expanded="false"><i
                className="fa fa-question-circle"></i><span className="hide-menu">Agents</span></Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a data-bs-toggle="collapse" href="#tables">
              <i className="fas fa-table"></i>
              <p>Rented property</p>
              <span className="caret"></span>
            </a>
            <div className="collapse" id="tables">
              <ul className="nav nav-collapse">
                <li>
                <Link to="/Rentedproperty" className="waves-effect waves-dark" aria-expanded="false"><i
                className="fa fa-question-circle"></i><span className="hide-menu">Rented property list</span></Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a data-bs-toggle="collapse" href="#maps">
              <i className="fas fa-map-marker-alt"></i>
              <p>Sold property</p>
              <span className="caret"></span>
            </a>
            <div className="collapse" id="maps">
              <ul className="nav nav-collapse">
                <li>
                  <a>
                   <Link to="/Soldproperty" className="waves-effect waves-dark" aria-expanded="false"><i
                className="fa fa-question-circle"></i><span className="hide-menu">Sold property list</span></Link>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a data-bs-toggle="collapse" href="#charts">
              <i className="far fa-chart-bar"></i>
              <p>Payments & Installments</p>
              <span className="caret"></span>
            </a>
            <div className="collapse" id="charts">
              <ul className="nav nav-collapse">
                <li>
                  <a href="charts/charts.html">
                  <Link to="/Paymentssold" className="waves-effect waves-dark" aria-expanded="false"><i
                className="fa fa-question-circle"></i><span className="hide-menu">Sold property payments & installments</span></Link>
                  </a>
                </li>
                <li>
                  <a href="charts/sparkline.html">
                  <Link to="/Paymentsrented" className="waves-effect waves-dark" aria-expanded="false"><i
                className="fa fa-question-circle"></i><span className="hide-menu">Rented property payments & installments</span></Link>
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <a href="../../documentation/index.html">
              <i className="fas fa-file"></i>
              <Link to="/Invoices" className="waves-effect waves-dark" aria-expanded="false"><i
                className="fa fa-question-circle"></i><span className="hide-menu">Invoices</span></Link>
            </a>
          </li>
          <li className="nav-item">
            <a>
              <i className="fas fa-bars"></i>
              <Link to="/Clients" className="waves-effect waves-dark" aria-expanded="false"><i
                className="fa fa-question-circle"></i><span className="hide-menu">Clients</span></Link>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Sidebar