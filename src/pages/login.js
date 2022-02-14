import React, { useState } from 'react';
import '../assets/custom-stylesheet/login_style.css';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

const LogIn = ({ login, isAuthenticated, inValid }) => {

    const [show1, setShow1] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (inValid) {
            setShow1(true)
        }
        else {
            login(email, password)
        }
    };

    // Check isAuthenticated ?
    if (isAuthenticated) {
        return <Redirect to="/dashboard/mold" />
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
                                            {show1 && <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                                <strong> Invalid !! </strong>
                                                Email/Password combination
                                                <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setShow1(false)}>
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>}
                                            <div className="card-body card_css">
                                                <div className="text-center">
                                                    <h5 className="card_head"> LOGIN </h5>
                                                </div>
                                                <form className="theme-form" onSubmit={e => onSubmit(e)}>

                                                    <div className="form-group">

                                                        <label className="col-form-label pt-0"> Email </label>

                                                        <input className="form-control" type="email" name="email" value={email}
                                                            onChange={e => onChange(e)} placeholder='Please Enter Your Email' required />

                                                    </div>

                                                    <div className="form-group">

                                                        <label className="col-form-label"> Password </label>

                                                        <div className="d-flex mt-2">
                                                            <input className="form-control" placeholder="Enter Your Password" onChange={e => onChange(e)} value={password} minLength={8} name="password" type={showPassword ? "text" : "password"} required />
                                                            <i className="far fa-eye m-2" style={{ cursor : "pointer" }} onClick={ () => setShowPassword(!showPassword) }></i>
                                                        </div>

                                                    </div>

                                                    <div className="form-group form-row mt-3 mb-0 text-center">
                                                        <button className="btn btn-primary btn-block btn_txt" type="submit">
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
                                                            <Link className="btn-link text-capitalize sign_up ml-2" to="/signup">
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

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    inValid: state.auth.inValid,
    user: state.auth.user
})

export default connect(mapStateToProps, { login })(LogIn);