import React, { Fragment, useState } from 'react';
import '../assets/custom-stylesheet/login_style.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';

const Signup = ({ signup, alreadyExists, isAuthenticated }) => {

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        re_password: ''
    });

    const { name, email, password, re_password } = formData;

    const onChange = e => { 
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();

        if (password !== re_password) {
            setShow1(true)
        }
        else {
            setShow2(true);
        }

        signup(name, email, password, re_password);
    };

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
                                            {show1 && <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                                <strong> Oop's something went wrong </strong>
                                                <ol className="d-flex flex-column ml-4">
                                                    Please Make Sure
                                                    <li> This email has not registered before. </li>
                                                    <li> Entered password's are same. </li>
                                                    <li> Email is not similar to Password. </li>
                                                    Refresh the Page and Try again.
                                                </ol>
                                                <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setShow1(false)}>
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>}

                                            {show2 && <div className="alert alert-success alert-dismissible fade show" role="alert">
                                                A verification link has been sent on <strong> {formData.email} </strong>
                                                <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setShow2(false)}>
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>}

                                            <div className="card-body card_css">
                                                <div className="text-center">
                                                    <h5 className="card_head">Sign Up</h5>
                                                </div>
                                                <form className="theme-form" onSubmit={e => onSubmit(e)}>

                                                    <div className="form-group">
                                                        <label htmlFor="name"> Name: </label>
                                                        <input className="form-control" name="name" placeholder="Enter Your Full Name" value={name} onChange={e => onChange(e)} required />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="email"> Email: </label>
                                                        <input className="form-control" name="email" placeholder="Enter Your Email Address" type="email" onChange={e => onChange(e)} value={email} required />
                                                    </div>
                                                    <div className="form-group">
                                                        <label> Password: </label>
                                                        <div className="d-flex mt-2">
                                                            <input className="form-control" placeholder="Enter Your Password" onChange={e => onChange(e)} value={password} minLength={8} name="password" type={showPassword ? "text" : "password"} required />
                                                            <i className="far fa-eye m-2" style={{ cursor : "pointer" }} onClick={ () => setShowPassword(!showPassword) }></i>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label> Retype Password: </label>
                                                        <div className="d-flex">
                                                            <input className="form-control" placeholder="Re-Enter Your Password" type={showPassword2 ? "text" : "password"} minLength={8} onChange={e => onChange(e)} value={re_password} name="re_password" required />
                                                            <i className="far fa-eye m-2" style={{ cursor : "pointer" }} onClick={ () => setShowPassword2(!showPassword2) }></i>
                                                        </div>
                                                    </div>
                                                    <div className="form-group form-row mt-3 mb-0">
                                                        <button className="btn btn-primary btn-block" type="submit" > Sign Up </button>
                                                    </div>
                                                    <div className="login_links text-center">
                                                        <div className="mt-2"> Are you already a user ?  <Link className="btn-link text-capitalize sign_in" to="/login"> Sign In </Link>
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

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    alreadyExists: state.auth.alreadyExists
})

export default connect(mapStateToProps, { signup })(Signup);