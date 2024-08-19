import React from 'react';

const Testimonial: React.FC = () => {
    return (
        <div className="container-fluid testimonial py-5">
            <div className="container py-5">
                <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
                    <h5 className="section-title px-3">Testimonial</h5>
                    <h1 className="mb-0">Our Clients Say!!!</h1>
                </div>
                <div className="testimonial-carousel">
                    <div className="testimonial-item text-center rounded pb-4" style={{ width: "400px" }}>
                        <div className="testimonial-comment bg-light rounded p-4">
                            <p className="text-center mb-5">
                                qua da
                            </p>
                        </div>
                        <div className="testimonial-img p-1">
                            <img src="https://icons.veryicon.com/png/o/miscellaneous/youyinzhibo/guest.png" className="img-fluid rounded-circle" alt="Image" />
                        </div>
                        <div style={{ marginTop: '-35px' }}>
                            <h5 className="mb-0">kien</h5>
                            <p className="mb-0">kien</p>
                            <div className="d-flex justify-content-center">
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item text-center rounded pb-4" style={{ width: "400px" }}>
                        <div className="testimonial-comment bg-light rounded p-4">
                            <p className="text-center mb-5">
                                uy tin uy tin
                            </p>
                        </div>
                        <div className="testimonial-img p-1">
                            <img src="https://icons.veryicon.com/png/o/miscellaneous/youyinzhibo/guest.png" className="img-fluid rounded-circle" alt="Image" />
                        </div>
                        <div style={{ marginTop: '-35px' }}>
                            <h5 className="mb-0">phule</h5>
                            <p className="mb-0">phule</p>
                            <div className="d-flex justify-content-center">
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item text-center rounded pb-4" style={{ width: "400px" }}>
                        <div className="testimonial-comment bg-light rounded p-4">
                            <p className="text-center mb-5">
                                qua uy tin
                            </p>
                        </div>
                        <div className="testimonial-img p-1">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTluyicuemknFfIVVsKwXIqyLD2kLp8Q6sOdw&s" className="img-fluid rounded-circle" alt="Image" />
                        </div>
                        <div style={{ marginTop: '-35px' }}>
                            <h5 className="mb-0">Yhwach</h5>
                            <p className="mb-0">Wandenreich</p>
                            <div className="d-flex justify-content-center">
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                                <i className="fas fa-star text-primary"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Testimonial;
