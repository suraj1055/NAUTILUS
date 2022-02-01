import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AlignLeft, LogOut } from 'react-feather';
import '../../../assets/custom-stylesheet/header_style.css';
import { connect } from 'react-redux';
import { logout } from '../../../actions/auth';

const Header = ({ logout }) => {
  const [sidebar, setSidebar] = useState(false);
  
  const openCloseSidebar = () => {
    if (sidebar) {
      setSidebar(!sidebar)
      document.querySelector(".page-main-header").classList.remove('open');
      document.querySelector(".page-sidebar").classList.remove('open');
    } else {
      setSidebar(!sidebar)
      document.querySelector(".page-main-header").classList.add('open');
      document.querySelector(".page-sidebar").classList.add('open');
    }
  }

  return (
    <Fragment>
      <div className="page-main-header" >
        <div className="main-header-right row">
          <div className="main-header-left d-lg-none">
            <div className="logo-wrapper">



            </div>
          </div>
          <div className="d-block">
            <div className="media-body text-right switch-sm">
              <label className="switch">
                <a href="#javascript" onClick={() => openCloseSidebar()}>
                  <AlignLeft />
                </a>
              </label>
            </div>
          </div>
          <div className="nav-right col p-0">
            <div className="pull-right mt-2">
              <Link to="/login">
                <LogOut style={{ height: '18px' }} onClick={logout} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})


export default connect(mapStateToProps, { logout })(Header);