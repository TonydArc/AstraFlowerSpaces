import React from 'react';

const Login: React.FC = () => {
    return (
        <>
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h3 className="text-white display-3 mb-4">404 Page</h3>
                    <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="#">Pages</a>
                        </li>
                        <li className="breadcrumb-item active text-white">404 Page</li>
                    </ol>
                </div>
            </div>

            <div className="container-fluid h-custom" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="lead fw-normal mb-0 me-3">Login with</p>
                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="fab fa-facebook-f"></i>
                                </button>

                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="fab fa-twitter"></i>
                                </button>

                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="fab fa-linkedin-in"></i>
                                </button>
                            </div>

                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">Or</p>
                            </div>

                            {/* Email input */}
                            <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-envelope fa-lg me-3 fa-fw mb-1" style={{ fontSize: "30px" }}></i>
                                <div className="form-outline flex-fill mb-0">
                                    <input type="email" id="form3Example3c" className="form-control" placeholder='Your Email' />
                                </div>
                            </div>

                            {/* Password input */}
                            <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-lock fa-lg me-3 fa-fw mb-1" style={{ fontSize: "30px" }}></i>
                                <div className="form-outline flex-fill mb-0">
                                    <input type="email" id="form3Example3c" className="form-control" placeholder='Enter Your Password' />
                                </div>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                {/* Checkbox */}
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="button" className="btn btn-primary btn-lg"
                                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/signup"
                                    className="link-danger">Sign Up</a></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
