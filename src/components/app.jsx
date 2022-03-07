import React, { Fragment, useEffect } from 'react';
import Header from './common/header-component/header';
import Sidebar from './common/sidebar-component/sidebar';
import '../assets/custom-stylesheet/header_style.css';
import Loader from './common/loader';
import { checkAuthenticated, load_user } from '../actions/auth'
import { connect } from 'react-redux';

const App = (props) => {

    useEffect(() => {
        props.checkAuthenticated();
        props.load_user();
    }, [props])

    return (
        <Fragment>
            <Loader />
            <div className="page-wrapper">
                <div className="page-body-wrapper">
                    <Header />
                    <Sidebar />
                    <div className="page-body">
                        {props.children}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default connect(null, { checkAuthenticated, load_user })(App);