import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container-fluid about py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <div
              className="h-100"
              style={{
                border: '50px solid',
                borderColor: 'transparent #13357B transparent #13357B',
              }}
            >
              <img
                src="../src/assets/img/bitexco.jpg"
                className="img-fluid w-100 h-100"
                alt="About"
              />
            </div>
          </div>
          <div
            className="col-lg-7"
            style={{
              background: 'linear-gradient(rgba(255, 255, 255, .8), rgba(255, 255, 255, .8)), url(img/about-img-1.png)',
            }}
          >
            <h5 className="section-about-title pe-3">Về chúng tôi</h5>
            <h1 className="mb-4">
              Chào mừng đến <span className="text-primary">AstraFlowerSpaces</span>
            </h1>
            <p className="mb-4">
              AstraFlowerSpaces là một không gian văn phòng cho thuê hiện đại và chuyên nghiệp, được thiết kế nhằm mang lại trải nghiệm làm việc hiệu quả và thoải mái cho các doanh nghiệp và tổ chức. Với phương châm cung cấp giải pháp không gian làm việc linh hoạt, AstraFlowerSpaces tập trung vào việc tạo ra môi trường làm việc sáng tạo, thân thiện và đầy đủ tiện ích.
            </p>
            <p className="mb-4">
            AstraFlowerSpaces nằm tại các vị trí chiến lược của thành phố, giúp doanh nghiệp dễ dàng tiếp cận khách hàng, đối tác, và các tiện ích xung quanh. Điều này giúp doanh nghiệp tối ưu hóa thời gian di chuyển và tạo thuận lợi cho các hoạt động kinh doanh.
            </p>
            <div className="row gy-2 gx-4 mb-4">
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>Vị trí đắc địa
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>Không gian đa dạng, linh hoạt
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>Tiện ích cao cấp
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>Giá cả cạnh tranh
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>Dịch vụ hỗ trợ chuyên nghiệp
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>Môi trường làm việc sáng tạo
                </p>
              </div>
            </div>
            {/* <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href="#">
              Read More
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
