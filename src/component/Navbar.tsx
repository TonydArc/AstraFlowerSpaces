import React from 'react';

const NavBar: React.FC = () => {
    return (
        <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="/" className="navbar-brand p-0">
                    <h1 className="m-0">
                        <img src="/Logo.png" alt="Icon" style={{ height: '100px', marginRight: '10px', marginBottom: '10px' }} />
                        AstraFlowerSpaces
                    </h1>
                    {/* <img src="img/logo.png" alt="Logo"> */}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <a href="/" className="nav-item nav-link active">Home</a>
                        <a href="/contact" className="nav-item nav-link">Liên Hệ</a>
                        {/* <a href="packages.html" className="nav-item nav-link">Packages</a>
                        <a href="blog.html" className="nav-item nav-link">Blog</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0">
                                <a href="destination.html" className="dropdown-item">Destination</a>
                                <a href="tour.html" className="dropdown-item">Explore Tour</a>
                                <a href="booking.html" className="dropdown-item">Travel Booking</a>
                                <a href="gallery.html" className="dropdown-item">Our Gallery</a>
                                <a href="guides.html" className="dropdown-item">Travel Guides</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div> */}
                    </div>
                    <a href="/officelist" className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">Book Now</a>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
