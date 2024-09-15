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
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="footer-item d-flex flex-column">
                <h1 className="m-0" style={{ color: 'white', fontSize: '30px'}}>
                  <img src="/lily.png" alt="Icon" style={{ height: '75px', marginRight: '10px', marginBottom: '10px' }} />
                  AstraFlowerSpaces
                </h1>
                <p style={{color: 'white'}}>THUỘC TẬP ĐOÀN LUNAR TEAR</p>
                <a href="#"><i className="fas fa-home me-2"></i> Bitexco Financial Tower Tầng 13</a>
                <a href="#"><i className="fas fa-envelope me-2"></i> wandenreich@gmail.com</a>
                <a href="#"><i className="fas fa-phone me-2"></i> +8888888888</a>
                {/* <a href="#" className="mb-3"><i className="fas fa-print me-2"></i> +8888888888</a> */}
                <div className="d-flex align-items-center">
                  <i className="fas fa-share fa-2x text-white me-2"></i>
                  <a className="btn-square btn btn-primary rounded-circle mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn-square btn btn-primary rounded-circle mx-1" href="#"><i className="fab fa-twitter"></i></a>
                  <a className="btn-square btn btn-primary rounded-circle mx-1" href="#"><i className="fab fa-instagram"></i></a>
                  <a className="btn-square btn btn-primary rounded-circle mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">Về Chúng Tôi</h4>
                <a href="/contact"><i className="fas fa-angle-right me-2"></i> Liên hệ</a>
                {/* <a href="#"><i className="fas fa-angle-right me-2"></i> About</a> */}
                {/* <a href="#"><i className="fas fa-angle-right me-2"></i> Blog</a>
                <a href="#"><i className="fas fa-angle-right me-2"></i> Press</a>
                <a href="#"><i className="fas fa-angle-right me-2"></i> Gift Cards</a>
                <a href="#"><i className="fas fa-angle-right me-2"></i> Magazine</a> */}
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="footer-item d-flex flex-column">
              <div className="rounded">
                <iframe
                  className="rounded w-100"
                  style={{ height: '300px' }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5163768604675!2d106.7018009748048!3d10.771706389376748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3acf87eaeb%3A0xc969a1975f3be32a!2sTh%C3%A1p%20Bitexco%20Financial%20Tower!5e0!3m2!1svi!2s!4v1726026759676!5m2!1svi!2s"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
                {/* <h4 className="mb-4 text-white">Support</h4>
                <a href="#"><i className="fas fa-angle-right me-2"></i> Contact</a>
                <a href="#"><i className="fas fa-angle-right me-2"></i> Legal Notice</a>
                <a href="#"><i className="fas fa-angle-right me-2"></i> Privacy Policy</a>
                <a href="#"><i className="fas fa-angle-right me-2"></i> Terms and Conditions</a>
                <a href="#"><i className="fas fa-angle-right me-2"></i> Sitemap</a>
                <a href="#"><i className="fas fa-angle-right me-2"></i> Cookie policy</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Copyright Start */}
      <div className="container-fluid copyright text-body py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-12 text-center">
              <a className="text-white" href="#">&copy;AstraFlowerSpaces</a>, All right reserved.
            </div>
            {/* <div className="col-md-6 text-center text-md-start">
              Designed By <a className="text-white" href="https://htmlcodex.com">HTML Codex</a> Distributed By <a href="https://themewagon.com">ThemeWagon</a>
            </div> */}
          </div>
        </div>
      </div>
      {/* Copyright End */}

      {/* Back to Top */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        id='go-to-top'
        className="btn btn-primary btn-outline-primary btn-md-square back-to-top"
      >
        <i style={{color: 'white'}} className="bi bi-arrow-up"></i>
      </a>
    </>
  );
};

export default Footer;
