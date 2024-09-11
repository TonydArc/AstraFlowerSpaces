import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import { getOffices } from '../services/OfficeService';
import ErrorToast from '../component/toast/ErrorToast';
import { getAccessToken } from '../services/untils';
import { useNavigate, useSearchParams } from 'react-router-dom';

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
    const [filteredOffices, setFilteredOffices] = useState<Office[]>([]); // Danh sách sau khi lọc và sắp xếp
    const [searchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(''); // Lưu từ khóa tìm kiếm
    const [sortOption, setSortOption] = useState(''); // Lưu lựa chọn sắp xếp
    const [showError, setErrorToast] = useState<boolean>(false);
    const navigate = useNavigate();
    

    const handelErrorToast = () => {
        setErrorToast(true);
    };

    const handleBookNow = (event: { preventDefault: () => void; }, id: number) => {
        event.preventDefault();

        const token = getAccessToken();
        if (token) {
            navigate(`/booking/${id}`)
        } else {
            handelErrorToast();
        }
    }

    useEffect(() => {
        // Lấy giá trị tìm kiếm từ query parameters
        const search = searchParams.get('search');
        if (search) {
          setSearchTerm(search);
        }
      }, [searchParams]);

    useEffect(() => {
        const fetchOffices = async () => {
            try {
                const response = await getOffices();
                if (response.success) {
                    setOffices(response.data);
                    setFilteredOffices(response.data); // Khởi tạo danh sách lọc
                } else {
                    console.error('Error fetching data:', response.message);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchOffices();
    }, []);

    // Định dạng giá tiền
    const formatPrice = (price: string) => {
        const numericPrice = parseFloat(price);
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', minimumFractionDigits: 0 }).format(numericPrice);
    };

    // Hàm lọc và sắp xếp danh sách dựa trên từ khóa và lựa chọn sắp xếp
    useEffect(() => {
        let updatedOffices = [...offices];

        // Lọc theo từ khóa tìm kiếm (địa chỉ hoặc tên)
        if (searchTerm) {
            updatedOffices = updatedOffices.filter(office =>
                office.OfficeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                office.Address.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Sắp xếp theo giá
        if (sortOption === 'asc') {
            updatedOffices.sort((a, b) => parseFloat(a.Price) - parseFloat(b.Price));
        } else if (sortOption === 'desc') {
            updatedOffices.sort((a, b) => parseFloat(b.Price) - parseFloat(a.Price));
        }

        setFilteredOffices(updatedOffices);
    }, [searchTerm, sortOption, offices]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredOffices.slice(indexOfFirstItem, indexOfLastItem);

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, pageNumber: number) => {
        event.preventDefault();
        setCurrentPage(pageNumber);
    };

    const renderPagination = () => {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(filteredOffices.length / itemsPerPage); i++) {
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
            <Header path='Office List' title='Đặt Ngay Nào !' />

            <div className="container-fluid packages py-5">
                <div className="container py-5">

                    <div className="mx-auto text-center mb-5" style={{ maxWidth: "900px" }}>
                        <h5 className="section-title px-3">Offices</h5>
                        <h1 className="mb-0">Các văn phòng cho thuê hiện đại</h1>
                        <div className="d-flex justify-content-between align-items-center mt-4">

                            <select style={{ flexGrow: 1, maxWidth: "200px" }}  className="form-select me-2" onChange={(e) => setSortOption(e.target.value)}>
                                <option value="">Sort theo giá</option>
                                <option value="asc">Giá: Thấp đến cao</option>
                                <option value="desc">Giá: Cao đến thấp</option>
                            </select>
                            <input
                                type="text"
                                className="form-control"
                                style={{ flexGrow: 1, maxWidth: "800px" }} // Điều chỉnh ở đây
                                placeholder="Tìm kiếm"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />

                        </div>
                    </div>

                    <div className="row">
                        {currentItems.map((item) => (
                            <div className="col-lg-4 col-md-6 mb-4" key={item.OfficeID}>
                                <div className="packages-item">
                                    <div className="packages-img">
                                        <img src={`https://res.cloudinary.com/dbsou9jps/image/upload/${item.ImgURL}`} style={{ height: "300px" }} className="img-fluid w-100 rounded-top" alt="Image" />
                                        <div className="packages-info d-flex border border-start-0 border-end-0 position-absolute" style={{ width: '100%', bottom: '0', left: '0', zIndex: 5 }}>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt me-2"></i>{item.Address}</small>
                                        </div>
                                        <div className="packages-price py-2 px-4">{formatPrice(item.Price)}/Ngày</div>
                                    </div>
                                    <div className="packages-content bg-light">
                                        <div className="p-4 pb-0">
                                            <h5 className="description mb-0">{item.OfficeName}</h5>
                                            <small className="text-uppercase">{item.TypeName}</small>
                                            <div className="mb-3">
                                                <small className="fa fa-star text-primary"></small>
                                                <small className="fa fa-star text-primary"></small>
                                                <small className="fa fa-star text-primary"></small>
                                                <small className="fa fa-star text-primary"></small>
                                                <small className="fa fa-star text-primary"></small>
                                            </div>
                                            <p className="description mb-4">{item.Description}</p>
                                        </div>
                                        <div className="row bg-primary rounded-bottom mx-0">
                                            <div className="col-6 text-start px-0">
                                                <a href={`/office/detail/${item.OfficeID}`} className="btn-hover btn text-white py-2 px-4">Xem Thêm</a>
                                            </div>
                                            <div className="col-6 text-end px-0">
                                                <a href={`/booking/${item.OfficeID}`} onClick={(e) => handleBookNow(e, item.OfficeID)} className="btn-hover btn text-white py-2 px-4">Book Ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <ErrorToast
                        message="Vui lòng đăng nhập để book"
                        show={showError}
                        onClose={() => setErrorToast(false)}
                    />

                    <div className="d-flex justify-content-center mt-4">
                        {renderPagination()}
                    </div>
                </div>
            </div>
        </>
    );
};

export default OfficeList;
