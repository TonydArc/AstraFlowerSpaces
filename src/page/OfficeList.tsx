import React, { useState } from 'react';
import Header from '../component/Header';

const offices = [
    { id: 1, location: 'Venice - Italy', price: 349.00, duration: '3 days', image: 'https://static.wikia.nocookie.net/drakengard/images/a/af/ChurchCity.jpg/revision/latest?cb=20140207022508' },
    { id: 1, location: 'Venice - Italy', price: 349.00, duration: '3 days', image: 'https://static.wikia.nocookie.net/drakengard/images/a/af/ChurchCity.jpg/revision/latest?cb=20140207022508' },
    { id: 1, location: 'Venice - Italy', price: 349.00, duration: '3 days', image: 'https://static.wikia.nocookie.net/drakengard/images/a/af/ChurchCity.jpg/revision/latest?cb=20140207022508' },
    { id: 1, location: 'Venice - Italy', price: 349.00, duration: '3 days', image: 'https://static.wikia.nocookie.net/drakengard/images/a/af/ChurchCity.jpg/revision/latest?cb=20140207022508' },
    { id: 1, location: 'Venice - Italy', price: 349.00, duration: '3 days', image: 'https://static.wikia.nocookie.net/drakengard/images/a/af/ChurchCity.jpg/revision/latest?cb=20140207022508' },
    { id: 1, location: 'Venice - Italy', price: 349.00, duration: '3 days', image: 'https://static.wikia.nocookie.net/drakengard/images/a/af/ChurchCity.jpg/revision/latest?cb=20140207022508' },
    { id: 1, location: 'Venice - Italy', price: 349.00, duration: '3 days', image: 'https://static.wikia.nocookie.net/drakengard/images/a/af/ChurchCity.jpg/revision/latest?cb=20140207022508' },
    { id: 1, location: 'Venice - Italy', price: 349.00, duration: '3 days', image: 'https://static.wikia.nocookie.net/drakengard/images/a/af/ChurchCity.jpg/revision/latest?cb=20140207022508' },
    { id: 1, location: 'Venice - Italy', price: 349.00, duration: '3 days', image: 'https://static.wikia.nocookie.net/drakengard/images/a/af/ChurchCity.jpg/revision/latest?cb=20140207022508' },

    // Add more office objects here
];

const OfficeList: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6); // Number of items per page

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = offices.slice(indexOfFirstItem, indexOfLastItem);

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, pageNumber: number) => {
        event.preventDefault();
        setCurrentPage(pageNumber);
    };
    const renderPagination = () => {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(offices.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <a className="page-link" href="#" aria-label="Previous" onClick={(e) => handleClick(e, currentPage - 1)}>
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {pageNumbers.map(number => (
                        <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                            <a className="page-link" href="#" onClick={(e) => handleClick(e, number)}>
                                {number}
                            </a>
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
                        <a className="page-link" href="#" aria-label="Next" onClick={(e) => handleClick(e, currentPage + 1)}>
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    };

    return (
        <>
            <Header path='Office List' title='Book Now'/>

            <div className="container-fluid packages py-5">
                <div className="container py-5">
                    {/* sort and filter */}
                    <div className="mx-auto text-center mb-5" style={{ maxWidth: "900px" }}>
                        <h5 className="section-title px-3">Packages</h5>
                        <h1 className="mb-0">Awesome Packages</h1>
                        <div className="d-flex justify-content-between align-items-center mt-4">
                            <div className="d-flex">
                                <select className="form-select me-2">
                                    <option>Sort by</option>
                                    <option value="1">Price</option>
                                    <option value="2">Rating</option>
                                    <option value="3">Duration</option>
                                </select>
                                <input type="text" className="form-control" placeholder="Filter by location"/>
                            </div>
                            <button className="btn btn-primary">Apply</button>
                        </div>
                    </div>

                    <div className="row">
                        {currentItems.map((item, index) => (
                            <div className="col-lg-4 col-md-6 mb-4" key={index}>
                                <div className="packages-item">
                                    <div className="packages-img">
                                        <img src={item.image} className="img-fluid w-100 rounded-top" alt="Image" />
                                        <div className="packages-info d-flex border border-start-0 border-end-0 position-absolute" style={{ width: '100%', bottom: '0', left: '0', zIndex: 5 }}>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt me-2"></i>{item.location}</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt me-2"></i>{item.duration}</small>
                                            <small className="flex-fill text-center py-2"><i className="fa fa-user me-2"></i>2 Person</small>
                                        </div>
                                        <div className="packages-price py-2 px-4">${item.price}</div>
                                    </div>
                                    <div className="packages-content bg-light">
                                        <div className="p-4 pb-0">
                                            <h5 className="mb-0">{item.location}</h5>
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
                                        <div className="row bg-primary rounded-bottom mx-0">
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
                        ))}
                    </div>

                    {/* pagination */}
                    <div className="d-flex justify-content-center mt-4">
                        {renderPagination()}
                    </div>
                </div>
            </div>
        </>
    )
};

export default OfficeList;
