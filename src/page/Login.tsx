import React, { SetStateAction, useEffect, useState } from 'react';
import Header from '../component/Header';
import { login } from '../services/UserService';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { getAccessToken } from '../services/untils';
import SuccessToast from '../component/toast/SuccessToast';
import ErrorToast from '../component/toast/ErrorToast';

const Login: React.FC = () => {
    const [email, setInputEmail] = useState('');
    const [password, setInputPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState<boolean>(false);
    const [showError, setErrorToast] = useState<boolean>(false);

    const handleShowToast = () => {
        setShowToast(true);
    };

    const handelErrorToast = () => {
        setErrorToast(true);
    };

    const handleChangeEmail = (event: { target: { value: SetStateAction<string>; }; }) => {
        setInputEmail(event.target.value);
    };

    const handleChangePassword = (event: { target: { value: SetStateAction<string>; }; }) => {
        setInputPassword(event.target.value);
    };

    useEffect(() => {
        const token = getAccessToken();
        if (token) {
            setTimeout(() => {
                navigate("/")
            }, 2000);
        }
    }, [cookies, navigate]);

    const validate = () => {
        let emailError = '';
        let passwordError = '';

        if (!email) {
            emailError = 'Yêu cầu nhập email';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            emailError = 'Email không hợp lệ';
        }

        if (!password) {
            passwordError = 'Yêu cầu nhập mật khẩu';
        } else if (password.length < 8) {
            passwordError = 'Mật khẩu phải có ít nhất 8 ký tự';
        }

        if (emailError || passwordError) {
            setErrors({ email: emailError, password: passwordError });
            return false;
        }

        return true;
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const isValid = validate();
        if (isValid) {
            console.log(email);
            console.log(password);

            const formdata = {
                Email: email,
                Password: password
            };
            try {
                await login(formdata);
                handleShowToast();
            } catch {
                handelErrorToast();
            }
        }
    };

    return (
        <>
            <Header title="Trang Đăng Nhập" path="Login" />

            <div className="container-fluid h-custom" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://static.vecteezy.com/system/resources/previews/030/530/036/large_2x/white-lily-flowers-on-the-background-of-the-summer-landscape-illustration-beautiful-botanic-lily-flower-oil-paint-illustration-ai-generated-free-photo.jpg"
                            className="img-fluid rounded mb-5" alt="flower" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={handleSubmit}>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="lead fw-normal mb-0 me-3">Đăng nhập với</p>
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
                                <p className="text-center fw-bold mx-3 mb-0">Hoặc</p>
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
                                <i className="fas fa-lock fa-lg me-3 fa-fw mb-1" style={{ fontSize: "30px" }}></i>
                                <div className="form-outline flex-fill mb-0">
                                    <input type="password" onChange={handleChangePassword} value={password} id="form3Example3c" className="form-control" placeholder='Mật khẩu của bạn' />
                                    {errors.password && <div className="text-danger">{errors.password}</div>}
                                </div>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                {/* Checkbox */}
                                {/* <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a> */}
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" className="btn btn-primary btn-lg"
                                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Đăng nhập</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Bạn không có tài khoản ? <a href="/signup"
                                    className="link-danger">Đăng kí</a></p>
                            </div>
                            <SuccessToast
                                message="Đăng nhập thành công"
                                show={showToast}
                                onClose={() => setShowToast(false)}
                            />
                            <ErrorToast
                                message="Đăng nhập thất bại"
                                show={showError}
                                onClose={() => setErrorToast(false)}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
