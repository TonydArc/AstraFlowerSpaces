
import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { getProfile } from '../services/UserService';
import { getAccessToken } from '../services/untils';
import SuccessToast from './toast/SuccessToast';
import ErrorToast from './toast/ErrorToast';

const TopBar: React.FC = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const cookies = new Cookies();
  const navigate = useNavigate();
  const accessToken = cookies.get('access_token');
  const [showToast, setShowToast] = useState<boolean>(false);
  const [showError, setErrorToast] = useState<boolean>(false);

  const handleShowToast = () => {
    setShowToast(true);
  };
  const handelErrorToast = () => {
    setErrorToast(true);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getProfile();
        // console.log(data);
        setUserName(data.FullName);
      } catch (error) {
        alert(error);
      }
    }
    const token = getAccessToken();
    if (token) {
      fetchUserData();
    }

  })

  const handleLogOut = async (event: { preventDefault: () => void; }) => {
    // Xóa cookie access_token
    event.preventDefault();
    try {
      handleShowToast();
      setTimeout(() => {
        cookies.remove('access_token', { path: '/' });
        navigate('/'); // Chuyển hướng sau khi xóa token
      }, 2000); // Thay đổi thời gian nếu cần
    } catch {
      handelErrorToast()
    }
  }

  return (
    <div className="container-fluid bg-primary px-5 d-none d-lg-block">
      <div className="row gx-0">
        <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
          <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="">
              <i className="fab fa-twitter fw-normal"></i>
            </a>
            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="">
              <i className="fab fa-facebook-f fw-normal"></i>
            </a>
            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="">
              <i className="fab fa-linkedin-in fw-normal"></i>
            </a>
            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="">
              <i className="fab fa-instagram fw-normal"></i>
            </a>
            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href="">
              <i className="fab fa-youtube fw-normal"></i>
            </a>
          </div>
        </div>
        <div className="col-lg-4 text-center text-lg-end">
          <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
            {!accessToken && (
              <>
                <a href="/signup">
                  <small className="me-3 text-light"><i className="fa fa-user me-2"></i>Đăng Kí</small>
                </a>
                <a href="/login">
                  <small className="me-3 text-light"><i className="fa fa-sign-in-alt me-2"></i>Đăng Nhập</small>
                </a>
              </>
            )}
            {accessToken && (
              <div className="dropdown">
                <a href="#" className="dropdown-toggle text-light" data-bs-toggle="dropdown">
                  <small><i className="fa  fa-user me-2"></i> {userName}</small>
                </a>
                <div className="dropdown-menu rounded">
                  <a href="/profile" className="dropdown-item"><i className="fas fa-user-alt me-2"></i> Thông Tin</a>
                  {/* <a href="/profile" className="dropdown-item"><i className="fas fa-tasks me-2"></i> My Booking</a> */}
                  <a href="" onClick={handleLogOut} className="dropdown-item"><i className="fas fa-power-off me-2"></i> Đăng xuất</a>
                </div>
              </div>
            )}
            <SuccessToast
              message="Đăng xuất thành công"
              show={showToast}
              onClose={() => setShowToast(false)}
            />
            <ErrorToast
              message="Đăng xuất thất bại"
              show={showError}
              onClose={() => setShowToast(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
