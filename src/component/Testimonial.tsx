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
                            <p className="text-center mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                            </p>
                        </div>
                        <div className="testimonial-img p-1">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqX2B83dbZw3DtUgo-JEcSQCYHq2B-4-o18w&s" className="img-fluid rounded-circle" alt="Image" />
                        </div>
                        <div style={{ marginTop: '-35px' }}>
                            <h5 className="mb-0">John Abraham</h5>
                            <p className="mb-0">New York, USA</p>
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
                            <p className="text-center mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                            </p>
                        </div>
                        <div className="testimonial-img p-1">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqX2B83dbZw3DtUgo-JEcSQCYHq2B-4-o18w&s" className="img-fluid rounded-circle" alt="Image" />
                        </div>
                        <div style={{ marginTop: '-35px' }}>
                            <h5 className="mb-0">John Abraham</h5>
                            <p className="mb-0">New York, USA</p>
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
                            <p className="text-center mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                            </p>
                        </div>
                        <div className="testimonial-img p-1">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqX2B83dbZw3DtUgo-JEcSQCYHq2B-4-o18w&s" className="img-fluid rounded-circle" alt="Image" />
                        </div>
                        <div style={{ marginTop: '-35px' }}>
                            <h5 className="mb-0">John Abraham</h5>
                            <p className="mb-0">New York, USA</p>
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
