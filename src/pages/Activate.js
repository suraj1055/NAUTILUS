import React from 'react'
import '../assets/custom-stylesheet/login_style.css';
import { Link } from 'react-router-dom';

const Activate = () => {
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
                                            <div className="bg_txture"></div>
                                            <div className="card-body">
                                                <div className="text-center">
                                                    <h5 className="card_head"> Account Activation </h5>
                                                </div>
                                                <form className="theme-form">
                                                    <div className="form-group">
                                                        <label className="col-form-label pt-0"> Email </label>
                                                        <input className="form-control" type="email" required="" />
                                                    </div>

                                                    <div className="login_links text-center">
                                                        <button className="btn btn-primary btn-block" type="button">
                                                            <Link className="text-capitalize btn-link" style= {{ color: '#fff' }} to={`${process.env.PUBLIC_URL}/activate/:uid/:token`}>
                                                                Activate Account
                                                            </Link>

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

export default Activate
