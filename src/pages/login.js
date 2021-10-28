import React from 'react';
import '../assets/custom-stylesheet/login_style.css';
import { Login, Email, Password, RememberMe, SignUp2 } from '../constant';
import { Link } from 'react-router-dom';

const SignIn = ({ history }) => {

    const loginAuth = () => {
        history.push(`${process.env.PUBLIC_URL}/dashboard/default`);
    }

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
                                                    <h5>{Login}</h5>
                                                </div>
                                                <form className="theme-form">
                                                    <div className="form-group">
                                                        <label className="col-form-label pt-0">{Email}</label>
                                                        <input className="form-control " type="email" required/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-form-label">{Password}</label>
                                                        <input className="form-control" type="password" required="" />
                                                    </div>
                                                    <div className="form-group form-row mt-3 mb-0 text-center">
                                                        <button className="btn btn-primary btn-block btn_txt " type="button" onClick={() => loginAuth()}>{Login}</button>
                                                    </div>
                                                    <div className="row checkbox">
                                                        <input id="checkbox1" type="checkbox" />
                                                        <label htmlFor="checkbox1 txt-col">{RememberMe}</label>
                                                        <Link to={`${process.env.PUBLIC_URL}/pages/resetPwd`} className="col-md-8 btn-link text-capitalize text-right mt-2"> Forgot Password ? </Link>
                                                    </div>

                                                    <div className="login_links text-center">
                                                        <div className="mt-2">{"Don't have an Account?"} <Link className="btn-link text-capitalize" to={`${process.env.PUBLIC_URL}/pages/signup`}>{SignUp2}</Link></div>
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

export default SignIn;