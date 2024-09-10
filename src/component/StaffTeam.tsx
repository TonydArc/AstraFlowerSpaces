import React from 'react';

const StaffTeam: React.FC = () => {
  return (
    <div className="container-fluid guide">
      <div className="container py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
          <h3 className="section-title px-3">NGƯỜI ĐỨNG ĐẦU</h3>
          {/* <p className="mb-0">Các vị CEO</p> */}
        </div>
        <div className="row g-4 justify-content-center">
          
          <div className="col-md-6 col-lg-4">
            <div className="guide-item">
              <div className="guide-img">
                <div className="guide-img-efects">
                  <img src="../src/assets/img/sus.jpg" className="img-fluid w-100 rounded-top" alt="Guide" style={{ height: '400px'}}/>
                </div>
                <div className="guide-icon rounded-pill p-2">
                  <a className="btn btn-square btn-primary rounded-circle mx-1" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square btn-primary rounded-circle mx-1" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square btn-primary rounded-circle mx-1" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="btn btn-square btn-primary rounded-circle mx-1" href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <div className="guide-title text-center rounded-bottom p-4">
                <div className="guide-title-inner">
                  <h4 className="mt-3">SUS</h4>
                  <p className="mb-0">asf</p>
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-6 col-lg-4">
            <div className="guide-item">
              <div className="guide-img">
                <div className="guide-img-efects">
                  <img src="../src/assets/img/trisnguyen.png" className="img-fluid w-100 rounded-top" style={{ height: '400px'}}/>
                </div>
                <div className="guide-icon rounded-pill p-2">
                  <a className="btn btn-square btn-primary rounded-circle mx-1" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square btn-primary rounded-circle mx-1" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square btn-primary rounded-circle mx-1" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="btn btn-square btn-primary rounded-circle mx-1" href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <div className="guide-title text-center rounded-bottom p-4">
                <div className="guide-title-inner">
                  <h4 className="mt-3">TrisNguyen</h4>
                  <p className="mb-0">The Red Sun</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffTeam;
