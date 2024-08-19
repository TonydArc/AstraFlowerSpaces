import React from 'react';
import Header from '../component/Header';

const Contact: React.FC = () => {
  return (
    <>
      <Header title="Contact Us" path="Contact" />

      {/* Contact Start */}
      <div className="container-fluid contact bg-light py-5">
        <div className="container py-5">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
            <h5 className="section-title px-3">Contact Us</h5>
            <h1 className="mb-0">Contact For Any Query</h1>
          </div>
          <div className="row g-5 align-items-center">
            <div className="col-lg-4">
              <div className="bg-white rounded p-4">
                <div className="text-center mb-4">
                  <i className="fa fa-map-marker-alt fa-3x text-primary"></i>
                  <h4 className="text-primary">Address</h4>
                  <p className="mb-0"> <br /> Wandenreich</p>
                </div>
                <div className="text-center mb-4">
                  <i className="fa fa-phone-alt fa-3x text-primary mb-3"></i>
                  <h4 className="text-primary">Mobile</h4>
                  <p className="mb-0">+8888888888</p>
                  <p className="mb-0">+8888888888</p>
                </div>
                <div className="text-center">
                  <i className="fa fa-envelope-open fa-3x text-primary mb-3"></i>
                  <h4 className="text-primary">Email</h4>
                  <p className="mb-0">wandenreich@gmail.com</p>
                  <p className="mb-0"></p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <h3 className="mb-2">Send us a message</h3>
              <p className="mb-4">
                The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done.{' '}
              </p>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control border-0" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control border-0" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control border-0" id="subject" placeholder="Subject" />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control border-0" placeholder="Leave a message here" id="message" style={{ height: '160px' }}></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-12">
              <div className="rounded">
                <iframe
                  className="rounded w-100"
                  style={{ height: '450px' }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501726.5407345099!2d106.36556175435443!3d10.754618130150035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2zVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1723531313195!5m2!1svi!2s"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </>
  );
};

export default Contact;
