import React, { SetStateAction, useEffect, useState } from 'react';
import Header from '../component/Header';
import { useParams } from 'react-router-dom';
import { getOfficeById } from '../services/OfficeService';
import { getCmtList, getProfile, writeCmt } from '../services/UserService';
import { getAccessToken } from '../services/untils';
import SuccessToast from '../component/toast/SuccessToast';
import ErrorToast from '../component/toast/ErrorToast';

interface Office {
    OfficeID: number;
    OfficeName: string;
    Description: string;
    Address: string;
    Price: string;
    ServiceName: string;
    Status: string;
    ImgURL: string;
    ThumbnailURL: string | null;
    TypeName: string;
}

interface Comments {
    ReviewID: number,
    OfficeID: number,
    CustomerID: number,
    FullName: string,
    Email: string,
    Phone: string,
    Address: string,
    Rating: number,
    Comment: string,
    ReviewDate: string
}

const OfficeDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [office, setOffice] = useState<Office | null>(null);
    const [cmtlist, setCmtlist] = useState<Comments[]>([]);
    const [customerid, setCustomerID] = useState<number | null>(null);
    const [cmt, setCmt] = useState('');

    const [error, setError] = useState('');
    const [showToast, setShowToast] = useState<boolean>(false);
    const [showError, setErrorToast] = useState<boolean>(false);

    const handleShowToast = () => {
        setShowToast(true);
    };
    const handelErrorToast = () => {
        setErrorToast(true);
    };

    const handleCmt = (event: { target: { value: SetStateAction<string>; }; }) => {
        setCmt(event.target.value);
    };

    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear().toString().slice(-2); // Lấy 2 chữ số cuối của năm
        const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Lấy tháng và thêm 0 nếu cần
        const day = today.getDate().toString().padStart(2, '0'); // Lấy ngày và thêm 0 nếu cần

        return `${year}-${month}-${day}`;
    };

    const handleSend = async () => {
        const token = getAccessToken();
        if (token) {
            try {
                const data = {
                    "OfficeID": office?.OfficeID,
                    "CustomerID": customerid,
                    "Rating": 5,
                    "Comment": cmt,
                    "ReviewDate": getCurrentDate()
                }

                await writeCmt(data);
                handleShowToast();
                fetchCmt(); // Gọi lại fetch comment sau khi gửi thành công

            } catch {
                setError("Comment thất bại");
                handelErrorToast();
            }
        } else {
            setError("Vui Lòng Log in trước khi comment");
            handelErrorToast();
        }
    };

    const fetchCmt = async () => {
        try {
            if (office?.OfficeID) {
                const data = await getCmtList(office.OfficeID);
                setCmtlist(data.data);
            }
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await getProfile();
                setCustomerID(data.CustomerID);
            } catch (error) {
                alert(error);
            }
        };

        const token = getAccessToken();
        if (token) {
            fetchUserData();
        }
    }, []);

    useEffect(() => {
        const fetchOfficeById = async () => {
            try {
                const officeId = Number(id);
                if (isNaN(officeId)) {
                    console.error('Invalid office ID:', id);
                    return;
                }

                const response = await getOfficeById(officeId);
                if (response.success) {
                    setOffice(response.data);
                } else {
                    console.error('Error fetching data:', response.message);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchOfficeById();
    }, [id]);

    useEffect(() => {
        if (office) {
            fetchCmt(); // Chỉ fetch comments khi `office` đã được thiết lập
        }
    }, [office]);

    const formatPrice = (price: string) => {
        const numericPrice = parseFloat(price);
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', minimumFractionDigits: 0 }).format(numericPrice);
    };

    return (
        <>
            <Header path='Detail' title='Office Detail'></Header>

            <div className="section" style={{ marginTop: "75px", marginBottom: "75px" }}>
                <div className="container" style={{ marginBottom: "100px" }}>
                    <div className="row justify-content-between">
                        <div className="col-lg-7">
                            <div className="img-property-slide-wrap">
                                <div className="img-property-slide">
                                    <img src="https://img.lovepik.com/photo/50101/9784.jpg_wh860.jpg" alt="Image" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <h2 className="heading text-primary">{office?.OfficeName}</h2>
                            <p className="meta">{office?.Address}</p>
                            <p className="meta">{formatPrice(office?.Price)}/Ngày</p>
                            <p className="meta">Loại: {office?.TypeName}</p>
                            <p className="text-black-50">
                                {office?.Description}
                            </p>

                            <a style={{ width: "100%", marginTop: "30px" }} href={`/booking/${office?.OfficeID}`} className="btn btn-primary rounded-pill py-2 px-4">Book</a>

                        </div>
                    </div>
                </div>

                {/* Comments Section */}
                <div className="container mt-5 mb-5 ">
                    <div className="row d-flex justify-content-center align-items-center ">
                        <div className="col-lg-10">
                            <div className="card" style={{ padding: "20px" }}>
                                <div className="p-2">
                                    <h6>Comments</h6>
                                </div>
                                {/* write cmt */}
                                <div className="mt-3 d-flex align-items-center p-2">
                                    <img src="https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"
                                        width="50" className="rounded-circle mr-2" alt="User" />

                                    <div className="input-group" style={{ marginLeft: "10px" }}>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter your comment..."
                                            aria-label="Enter your comment"
                                            onChange={handleCmt}
                                            value={cmt}
                                        />
                                        <button onClick={handleSend} className="btn btn-primary" type="button">
                                            Send
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-2 mb-3">
                                    {/* list cmt */}
                                    {cmtlist.map((item) => (
                                        <div key={item.ReviewID} className="d-flex flex-row p-3">
                                            <img src="https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg" width="40" height="40" className="rounded-circle mr-3" alt="User" />
                                            <div className="w-100">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <span style={{ marginLeft: "10px" }} className="mr-2">{item.FullName}</span>
                                                    </div>
                                                </div>
                                                <p style={{ marginLeft: "10px" }} className="text-justify comment-text mb-0">
                                                    {item.Comment}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <SuccessToast
                                message="Comment thành công"
                                show={showToast}
                                onClose={() => setShowToast(false)}
                            />
                            <ErrorToast
                                message={error}
                                show={showError}
                                onClose={() => setErrorToast(false)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OfficeDetail;
