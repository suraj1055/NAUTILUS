import '../assets/custom-stylesheet/login_style.css';
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { verify } from '../actions/auth';

const Activate = ({ verify, match }) => {

    const [show1, setShow1] = useState(false);

    const verifyAccount = (e) => {

        const uid = match.params.uid;
        const token = match.params.token;

        verify(uid, token)
        setShow1(true)
    }

    return (
        <div>
            <div className="page-wrapper">
                <div className="container-fluid p-0">
                    {/* <!-- login page start--> */}
                    <div className="authentication-main">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="auth-innerright">
                                    <div className="authentication-box">

                                        <div className="card mt-4">
                                            {show1 && <div className="alert alert-success alert-dismissible fade show" role="alert">
                                                Account has been verified. Please close this page and go back to logIn page.
                                                <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setShow1(false)}>
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>}
                                            <div className="bg_txture"></div>
                                            <div className="card-body">
                                                <div className="text-center">
                                                    <h5 className="card_head"> Verify your Account </h5>
                                                </div>
                                                <form className="theme-form">

                                                    <div className="login_links text-center">
                                                        <button className="btn btn-primary btn-block" type="button" onClick={verifyAccount}>
                                                            Verify
                                                        </button>
                                                    </div>

                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(null, { verify })(Activate);
