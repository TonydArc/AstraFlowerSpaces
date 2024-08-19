import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      {/* Subscribe Start */}
      <div className="container-fluid subscribe py-5">
        <div className="container text-center py-5">
          {/* <div className="mx-auto text-center" style={{ maxWidth: '900px' }}>
            <h5 className="subscribe-title px-3">Subscribe</h5>
            <h1 className="text-white mb-4">Our Newsletter</h1>
            <p className="text-white mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi.
            </p>
            <div className="position-relative mx-auto">
              <input className="form-control border-primary rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
              <button type="button" className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 px-4 mt-2 me-2">
                Subscribe
              </button>
            </div>
          </div> */}
        </div>
      </div>
      {/* Subscribe End */}

      {/* Footer Start */}
      <div className="container-fluid footer py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">Get In Touch</h4>
                <a href="#"><i className="fas fa-home me-2"></i> Wandenreich</a>
                <a href="#"><i className="fas fa-envelope me-2"></i> wandenreich@gmail.com</a>
                <a href="#"><i className="fas fa-phone me-2"></i> +8888888888</a>
                <a href="#" className="mb-3"><i className="fas fa-print me-2"></i> +8888888888</a>
                <div className="d-flex align-items-center">
                  <i className="fas fa-share fa-2x text-white me-2"></i>
                  <a className="btn-square btn btn-primary rounded-circle mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn-square btn btn-primary rounded-circle mx-1" href="#"><i className="fab fa-twitter"></i></a>
                  <a className="btn-square btn btn-primary rounded-circle mx-1" href="#"><i className="fab fa-instagram"></i></a>
                  <a className="btn-square btn btn-primary rounded-circle mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">Company</h4>
                <a href="#"><i className="fas fa-angle-right me-2"></i> About</a>
                <a href="#"><i className="fas fa-angle-right me-2"></i> Careers</a>
                <a href="#"><i className="fas fa-angle-right me-2"></i> Blog</a>
                <a href="#"><i className="fas fa-angle-right me-2"></i> Press</a>
                <a href="#"><i className="fas fa-angle-right me-2"></i> Gift Cards</a>
                <a href="#"><i className="fas fa-angle-right me-2"></i> Magazine</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">Support</h4>
                <a href="#"><i className="fas fa-angle-right me-2"></i> Contact</a>
                <a href="#"><i className="fas fa-angle-right me-2"></i> Legal Notice</a>
                <a href="#"><i className="fas fa-angle-right me-2"></i> Privacy Policy</a>
                <a href="#"><i className="fas fa-angle-right me-2"></i> Terms and Conditions</a>
                <a href="#"><i className="fas fa-angle-right me-2"></i> Sitemap</a>
                <a href="#"><i className="fas fa-angle-right me-2"></i> Cookie policy</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item">
                {/* <div className="row gy-3 gx-2 mb-4">
                  <div className="col-xl-6">
                    <form>
                      <div className="form-floating">
                        <select className="form-select bg-dark border" id="select1">
                          <option value="1">Arabic</option>
                          <option value="2">German</option>
                          <option value="3">Greek</option>
                          <option value="3">New York</option>
                        </select>
                        <label htmlFor="select1">English</label>
                      </div>
                    </form>
                  </div>
                  <div className="col-xl-6">
                    <form>
                      <div className="form-floating">
                        <select className="form-select bg-dark border" id="select2">
                          <option value="1">USD</option>
                          <option value="2">EUR</option>
                          <option value="3">INR</option>
                          <option value="3">GBP</option>
                        </select>
                        <label htmlFor="select2">$</label>
                      </div>
                    </form>
                  </div>
                </div> */}
                {/* <h4 className="text-white mb-3">Payments</h4>
                <div className="footer-bank-card">
                  <a href="#" className="text-white me-2"><i className="fab fa-cc-amex fa-2x"></i></a>
                  <a href="#" className="text-white me-2"><i className="fab fa-cc-visa fa-2x"></i></a>
                  <a href="#" className="text-white me-2"><i className="fas fa-credit-card fa-2x"></i></a>
                  <a href="#" className="text-white me-2"><i className="fab fa-cc-mastercard fa-2x"></i></a>
                  <a href="#" className="text-white me-2"><i className="fab fa-cc-paypal fa-2x"></i></a>
                  <a href="#" className="text-white"><i className="fab fa-cc-discover fa-2x"></i></a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Copyright Start */}
      {/* <div className="container-fluid copyright text-body py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-end mb-md-0">
              <i className="fas fa-copyright me-2"></i><a className="text-white" href="#">Your Site Name</a>, All right reserved.
            </div>
            <div className="col-md-6 text-center text-md-start">
              Designed By <a className="text-white" href="https://htmlcodex.com">HTML Codex</a> Distributed By <a href="https://themewagon.com">ThemeWagon</a>
            </div>
          </div>
        </div>
      </div> */}
      {/* Copyright End */}

      {/* Back to Top */}
      <a href="#" className="btn btn-primary btn-primary-outline-0 btn-md-square back-to-top"><i className="fa fa-arrow-up"></i></a>
    </>
  );
};

export default Footer;
