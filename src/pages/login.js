import React from 'react';
import '../assets/custom-stylesheet/login_style.css';
import { Link } from 'react-router-dom';

const LogIn = () => {

    return (
        <div>
            <div className="page-wrapper">
                <div className="container-fluid p-0">
                    <div className="authentication-main">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="auth-innerright">
                                    <div className="authentication-box">

                                        <div className="card mt-4">
                                            <div className="bg_txture"></div>
                                            <div className="card-body card_css">
                                                <div className="text-center">
                                                    <h5 className="card_head"> LOGIN </h5>
                                                </div>
                                                <form className="theme-form" >

                                                    <div className="form-group">

                                                        <label className="col-form-label pt-0"> Email </label>

                                                        <input className="form-control " type="email" name="email" required />

                                                    </div>

                                                    <div className="form-group">

                                                        <label className="col-form-label"> Password </label>

                                                        <input className="form-control" type="password" name="password" required />

                                                    </div>

                                                    <div className="form-group form-row mt-3 mb-0 text-center">
                                                        <button className="btn btn-primary btn-block btn_txt " type="submit">
                                                            Login
                                                        </button>
                                                    </div>

                                                    <div className="row checkbox">

                                                        <Link to="/reset-password" className="col-md-8 btn-link text-capitalize text-right mt-2 sign_up">
                                                            Forgot Password ?
                                                        </Link>
                                                    </div>

                                                    <div className="login_links text-center">

                                                        <div className="mt-2">
                                                            Don't have an Account ?
                                                            <Link className="btn-link text-capitalize sign_up" to="/signup">
                                                                Sign Up
                                                            </Link>
                                                        </div>

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
    );
};

export default LogIn;