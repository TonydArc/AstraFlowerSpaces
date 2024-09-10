import React from 'react';
import Header from '../component/Header';

const PageNotFound: React.FC = () => {
  return (
    <>
      <Header title="Error 404" path="404" />

      {/* 404 Start */}
      <div className="container-fluid py-5" style={{ background: 'linear-gradient(rgba(19, 53, 123, 0.3), rgba(19, 53, 153, 0.3))', objectFit: 'cover' }}>
        <div className="container py-5 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
              <h1 className="display-1">404</h1>
              <h1 className="mb-4 text-dark">Trang không được tìm thấy</h1>
              <p className="mb-4 text-dark">
                Chúng tôi xin lỗi nhưng trang này không được tìm thấy.Vui lòng quay lại home
              </p>
              <a className="btn btn-primary rounded-pill py-3 px-5" href="/">
                Quay lại home
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* 404 End */}
    </>
  );
}

export default PageNotFound;
