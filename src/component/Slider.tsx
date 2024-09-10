import React from 'react';

const Slider: React.FC = () => {
  return (
    <div className="carousel-header">
      <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img src="../src/assets/img/slider1.jpg" className="img-fluid" alt="Image" />
            <div className="carousel-caption">
              <div className="p-3" style={{ maxWidth: '900px' }}>
                <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>THUÊ VĂN PHÒNG</h4>
                <h1 className="display-2 text-capitalize text-white mb-4">Tiết kiệm thời gian và công sức</h1>
                <p className="mb-5 fs-5">Chúng tôi hỗ trợ bạn tiết kiệm tối đa thời gian và công sức trong việc tìm kiếm văn phòng lý tưởng.</p>
                <div className="d-flex align-items-center justify-content-center">
                  {/* <a className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" href="">Discover Now</a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../src/assets/img/slider2.jpg" className="img-fluid" alt="Image" />
            <div className="carousel-caption">
              <div className="p-3" style={{ maxWidth: '900px' }}>
                <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>THUÊ VĂN PHÒNG</h4>
                <h1 className="display-2 text-capitalize text-white mb-4">Vị trí đắc địa</h1>
                <p className="mb-5 fs-5">Văn phòng tọa lạc tại những vị trí đắc địa, trung tâm thành phố, thuận tiện cho mọi hoạt động kinh doanh.</p>
                <div className="d-flex align-items-center justify-content-center">
                  {/* <a className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" href="">Discover Now</a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../src/assets/img/slider3.jpg" className="img-fluid" alt="Image" />
            <div className="carousel-caption">
              <div className="p-3" style={{ maxWidth: '900px' }}>
                <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>THUÊ VĂN PHÒNG</h4>
                <h1 className="display-2 text-capitalize text-white mb-4">Giá cả cạnh tranh</h1>
                <p className="mb-5 fs-5">Giá thuê hấp dẫn, phù hợp với mọi ngân sách, giúp bạn tối ưu hóa chi phí kinh doanh.</p>
                <div className="d-flex align-items-center justify-content-center">
                  {/* <a className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" href="">Discover Now</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
          <span className="carousel-control-prev-icon btn bg-primary" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
          <span className="carousel-control-next-icon btn bg-primary" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
