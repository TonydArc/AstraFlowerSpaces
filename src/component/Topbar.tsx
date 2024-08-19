
import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { getProfile } from '../services/UserService';
import { getAccessToken } from '../services/untils';

const TopBar: React.FC = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const cookies = new Cookies();
  const navigate = useNavigate();
  const accessToken = cookies.get('access_token');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getProfile();
        // console.log(data);
        setUserName(data.Fullname);
      } catch (error) {
        alert(error);
      }
    }
    const token = getAccessToken();
    if (token) {
      fetchUserData();
    }

  })

  const handleLogOut = async () => {
    // Xóa cookie access_token

    try {
      cookies.remove('access_token', { path: '/' });
      alert('Log Out Success');
      navigate('/');
    } catch (error) {
      alert(error);
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
                  <small className="me-3 text-light"><i className="fa fa-user me-2"></i>Sign Up</small>
                </a>
                <a href="/login">
                  <small className="me-3 text-light"><i className="fa fa-sign-in-alt me-2"></i>Login</small>
                </a>
              </>
            )}
            {accessToken && (
              <div className="dropdown">
                <a href="#" className="dropdown-toggle text-light" data-bs-toggle="dropdown">
                  <small><i className="fa  fa-user me-2"></i> {userName}</small>
                </a>
                <div className="dropdown-menu rounded">
                  <a href="/profile" className="dropdown-item"><i className="fas fa-user-alt me-2"></i> My Profile</a>
                  <a href="" onClick={handleLogOut} className="dropdown-item"><i className="fas fa-power-off me-2"></i> Log Out</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
