import React, { Fragment } from 'react';
import '../assets/custom-stylesheet/login_style.css';
import { Email,Password,RetypePassword ,NewUser,SignUp2} from '../constant';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <div className="container-fluid">
                    <div className="authentication-main">
                        <div className="row">
                            <div className="col-sm-12 p-0">
                                <div className="auth-innerright">                                    
                                   
                                    <div className="authentication-box">

                                        <div className="card mt-4">
                                            <div className="bg_txture"></div>
                                            <div className="card-body card_css">
                                                <div className="text-center">
                                                    <h5 className="card_head">{NewUser}</h5>
                                                </div>
                                                <form className="theme-form">
                                                    <div className="form-group">
                                                        <label className="col-form-label">{Email}</label>
                                                        <input className="form-control" type="email" required="" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-form-label">{Password}</label>
                                                        <input className="form-control" type="password" required="" />
                                                    </div>
                                                <div className="form-group">
                                                    <label className="col-form-label">{RetypePassword}</label>
                                                    <input className="form-control" type="password"/>
                                                </div>
                                                <div className="form-group form-row mt-3 mb-0">
                                                        <button className="btn btn-primary btn-block" type="button">{SignUp2}</button>
                                                </div>
                                                    <div className="login_links text-center">
                                                     <div className="mt-2">{"Are you already user?"} <Link className="btn-link text-capitalize sign_in" to={`${process.env.PUBLIC_URL}/pages/login`}> Sign In </Link>
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
                    {/* <!-- sign up page ends--> */}
                </div>
            </div>
        </Fragment>
    );
};

export default Signup;