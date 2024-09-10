import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import { register } from '../services/UserService';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { getAccessToken } from '../services/untils';
import SuccessToast from '../component/toast/SuccessToast';
import ErrorToast from '../component/toast/ErrorToast';

const SignUp: React.FC = () => {
    const [name, setInputName] = useState('');
    const [email, setInputEmail] = useState('');
    const [password, setInputPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState<boolean>(false);
    const [showError, setErrorToast] = useState<boolean>(false);

    const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string; confirmpassword?: string; }>({});

    const handleShowToast = () => {
        setShowToast(true);
    };
    const handelErrorToast = () => {
        setErrorToast(true);
    };

    useEffect(() => {
        const token = getAccessToken();
        if (token) {
            navigate('/');
        }
    }, [cookies, navigate]);

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputName(event.target.value);
    };

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputEmail(event.target.value);
    };

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputPassword(event.target.value);
    };

    const handleChangeConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    };

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validateForm = () => {
        const validationErrors: { name?: string; email?: string; password?: string; confirmpassword?: string; } = {};

        if (!name) {
            validationErrors.name = 'Yêu cầu nhập họ tên';
        }
        if (!email) {
            validationErrors.email = 'Yêu cầu nhập email';
        } else if (!validateEmail(email)) {
            validationErrors.email = 'Email không hợp lệ';
        }
        if (!password) {
            validationErrors.password = 'Yêu cầu nhập mật khẩu';
        } else if (password.length < 8) {
            validationErrors.password = 'Mật khẩu phải có ít nhất 8 ký tự';
        }
        if (password !== confirmpassword) {
            validationErrors.confirmpassword = 'Mật khẩu không trùng khớp';
        }

        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (validateForm()) {
            const formdata = {
                Fullname: name,
                Email: email,
                Password: password
            };
            try {
                const user = await register(formdata);
                handleShowToast();
                return user;
            } catch {
                handelErrorToast();
                // alert('Register error: ' + error);
            }
        }
    };

    return (
        <>
            <Header title="Trang Đăng Kí" path="SignUp" />

            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ border: "none" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Đăng kí</p>

                                        <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                                            {/* Name input */}
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw" style={{ fontSize: "30px" }}></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" onChange={handleChangeName} value={name} id="form3Example1c" className="form-control" placeholder='Họ tên của bạn' />
                                                    {errors.name && <div className="text-danger">{errors.name}</div>}
                                                </div>
                                            </div>

                                            {/* Email input */}
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw mb-1" style={{ fontSize: "30px" }}></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email" onChange={handleChangeEmail} value={email} id="form3Example3c" className="form-control" placeholder='Email của bạn' />
                                                    {errors.email && <div className="text-danger">{errors.email}</div>}
                                                </div>
                                            </div>

                                            {/* Password input */}
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw" style={{ fontSize: "30px" }}></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" onChange={handleChangePassword} value={password} id="form3Example4c" className="form-control" placeholder='Mật khẩu của bạn' />
                                                    {errors.password && <div className="text-danger">{errors.password}</div>}
                                                </div>
                                            </div>

                                            {/* Confirm Password input */}
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw" style={{ fontSize: "30px" }}></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" onChange={handleChangeConfirmPassword} value={confirmpassword} id="form3Example4cd" className="form-control" placeholder='Nhập lại mật khẩu của bạn' />
                                                    {errors.confirmpassword && <div className="text-danger">{errors.confirmpassword}</div>}
                                                </div>
                                            </div>

                                            {/* <div className="form-check d-flex justify-content-center mb-5">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                <label className="form-check-label" htmlFor="form2Example3">
                                                    I agree all statements in <a href="">Terms of service</a>
                                                </label>
                                            </div> */}

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="btn btn-primary btn-lg">Đăng kí</button>
                                            </div>
                                            <SuccessToast
                                                message="Đăng kí thành công"
                                                show={showToast}
                                                onClose={() => setShowToast(false)}
                                            />
                                            <ErrorToast
                                                message="Đăng kí thất bại"
                                                show={showError}
                                                onClose={() => setShowToast(false)}
                                            />
                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img src="https://img.freepik.com/premium-photo/white-lily-full-bloom-digital-art-illustration_783299-501.jpg"
                                            className="img-fluid rounded" alt="flower" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
