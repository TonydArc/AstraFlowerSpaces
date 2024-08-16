import React from 'react';
import Header from "../component/Header";

const BookingForm: React.FC = () => {
    return (
        <>
            <Header title="Booking Form" path="Booking" />

            {/* Office Booking Start */}
            <div className="container-fluid packages booking py-5">
                <div className="container py-5">
                    <div className="row">

                        {/* selected office to booking */}
                        <div className="col-lg-6 mb-4 mb-lg-0 d-flex align-items-stretch">
                            <div className="packages-item rounded overflow-hidden flex-grow-1 d-flex flex-column">
                                <div className="packages-img position-relative flex-grow-1">
                                    <img 
                                        src="https://static.wikia.nocookie.net/drakengard/images/a/af/ChurchCity.jpg/revision/latest?cb=20140207022508" 
                                        className="img-fluid w-100 h-100 object-fit-cover" 
                                        alt="Image" 
                                    />
                                    <div className="packages-info d-flex border border-start-0 border-end-0 position-absolute bottom-0 start-0 w-100 z-index-5">
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt me-2"></i>Venice - Italy</small>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt me-2"></i>3 days</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-user me-2"></i>2 Person</small>
                                    </div>
                                    <div className="packages-price py-2 px-4">$349.00</div>
                                </div>
                                <div className="packages-content bg-light rounded-bottom flex-grow-1 d-flex flex-column">
                                    <div className="p-4 pb-0">
                                        <h5 className="mb-0">Venice - Italy</h5>
                                        <small className="text-uppercase">Hotel Deals</small>
                                        <div className="mb-3">
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                        </div>
                                        <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo quia quae illum aperiam fugiat voluptatem repellat</p>
                                    </div>
                                    <div className="row bg-primary rounded-bottom mx-0 mt-auto">
                                        <div className="col-6 text-start px-0">
                                            <a href="#" className="btn-hover btn text-white py-2 px-4">Read More</a>
                                        </div>
                                        <div className="col-6 text-end px-0">
                                            <a href="#" className="btn-hover btn text-white py-2 px-4">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 d-flex align-items-stretch">
                            <div className="form-container w-100">
                                <h1 className="text-white mb-3">Book A Tour Deals</h1>
                                <p className="text-white mb-4">
                                    Get <span className="text-warning">50% Off</span> On Your First Adventure Trip With Travela. Get More Deal Offers Here.
                                </p>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control bg-white border-0" id="name" placeholder="Your Name" />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control bg-white border-0" id="email" placeholder="Your Email" />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating date" id="date3" data-target-input="nearest">
                                                <input type="text" className="form-control bg-white border-0" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                                <label htmlFor="datetime">Date & Time</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <select className="form-select bg-white border-0" id="select1">
                                                    <option value="1">Destination 1</option>
                                                    <option value="2">Destination 2</option>
                                                    <option value="3">Destination 3</option>
                                                </select>
                                                <label htmlFor="select1">Destination</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <select className="form-select bg-white border-0" id="SelectPerson">
                                                    <option value="1">Persons 1</option>
                                                    <option value="2">Persons 2</option>
                                                    <option value="3">Persons 3</option>
                                                </select>
                                                <label htmlFor="SelectPerson">Persons</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <select className="form-select bg-white border-0" id="CategoriesSelect">
                                                    <option value="1">Kids</option>
                                                    <option value="2">1</option>
                                                    <option value="3">2</option>
                                                    <option value="4">3</option>
                                                </select>
                                                <label htmlFor="CategoriesSelect">Categories</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control bg-white border-0" placeholder="Special Request" id="message" style={{ height: '100px' }}></textarea>
                                                <label htmlFor="message">Special Request</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary text-white w-100 py-3" type="submit">Book Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Tour Booking End */}
        </>
    );
}

export default BookingForm;
