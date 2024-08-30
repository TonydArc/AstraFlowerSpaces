import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import { getOffices } from '../services/OfficeService';

interface Office {
    OfficeID: number;
    OfficeName: string;
    Description: string;
    Address: string;
    Price: string;
    ServiceName: string;
    Status: string;
    ImgURL: string;
    ThumbnailURL?: string;
    TypeName: string;
}

const OfficeList: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);
    const [offices, setOffices] = useState<Office[]>([]);

    useEffect(() => {
        const fetchOffices = async () => {
            try {
                const response = await getOffices();
                if (response.success) {
                    setOffices(response.data);
                } else {
                    console.error('Error fetching data:', response.message);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchOffices();
    }, []);

    const formatPrice = (price: string) => {
        const numericPrice = parseFloat(price);
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', minimumFractionDigits: 0 }).format(numericPrice);
    };

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
            <Header path='Office List' title='Book Now' />

            <div className="container-fluid packages py-5">
                <div className="container py-5">
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
                                <input type="text" className="form-control" placeholder="Filter by location" />
                            </div>
                            <button className="btn btn-primary">Apply</button>
                        </div>
                    </div>

                    <div className="row">
                        {currentItems.map((item) => (
                            <div className="col-lg-4 col-md-6 mb-4" key={item.OfficeID}>
                                <div className="packages-item">
                                    <div className="packages-img">
                                        {/* {`https://res.cloudinary.com/dbsou9jps/image/upload/${item.ImgURL}`} */}
                                        <img src="https://media.istockphoto.com/id/1196990459/photo/open-space-office.jpg?b=1&s=612x612&w=0&k=20&c=UfgPFzkdxhoJbLyXUOGoUsLb2b-7b7LjxnZH3xgaphA=" className="img-fluid w-100 rounded-top" alt="Image" />
                                        <div className="packages-info d-flex border border-start-0 border-end-0 position-absolute" style={{ width: '100%', bottom: '0', left: '0', zIndex: 5 }}>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt me-2"></i>{item.Address}</small>
                                            <small className="flex-fill text-center py-2"><i className="fa fa-tag me-2"></i>{item.ServiceName}</small>
                                        </div>
                                        <div className="packages-price py-2 px-4">{formatPrice(item.Price)}/Ngày</div>
                                    </div>
                                    <div className="packages-content bg-light">
                                        <div className="p-4 pb-0">
                                            <h5 className="mb-0">{item.OfficeName}</h5>
                                            <small className="text-uppercase">{item.TypeName}</small>
                                            <div className="mb-3">
                                                <small className="fa fa-star text-primary"></small>
                                                <small className="fa fa-star text-primary"></small>
                                                <small className="fa fa-star text-primary"></small>
                                                <small className="fa fa-star text-primary"></small>
                                                <small className="fa fa-star text-primary"></small>
                                            </div>
                                            {/* CSS để ẩn bớt mô tả nếu quá dài */}
                                            <p className="description mb-4">
                                                {item.Description}
                                            </p>
                                        </div>
                                        <div className="row bg-primary rounded-bottom mx-0">
                                            <div className="col-6 text-start px-0">
                                                <a href={`/office/detail/${item.OfficeID}`} className="btn-hover btn text-white py-2 px-4">Read More</a>
                                            </div>
                                            <div className="col-6 text-end px-0">
                                                <a href={`booking/${item.OfficeID}`} className="btn-hover btn text-white py-2 px-4">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="d-flex justify-content-center mt-4">
                        {renderPagination()}
                    </div>
                </div>
            </div>
        </>
    );
};

export default OfficeList;
