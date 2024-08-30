import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import { useParams } from 'react-router-dom';
import { getOfficeById } from '../services/OfficeService';

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

const OfficeDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [office, setOffice] = useState<Office | null>(null);

    useEffect(() => {

        const fetchOfficeById = async () => {
            try {
                const officeId = Number(id); // Chuyển `id` thành number
                if (isNaN(officeId)) {
                    console.error('Invalid office ID:', id);
                    return;
                }

                const response = await getOfficeById(officeId); // Lấy thông tin văn phòng theo id
                if (response.success) {
                    setOffice(response.data); // Cập nhật state với dữ liệu văn phòng nhận được
                } else if (!response.success) {
                    console.error('Error fetching data:', response.message);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchOfficeById();

    }, [id]);

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
                            {/* <p className="text-black-50">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
                                laborum quo quos omnis sed magnam id, ducimus saepe, debitis error
                                earum, iste dicta odio est sint dolorem magni animi tenetur.
                            </p> */}
                            <p className="text-black-50">
                                {office?.Description}
                            </p>


                            <a style={{ width: "100%", marginTop: "30px"}} href={`/booking/${office?.OfficeID}`} className="btn btn-primary rounded-pill py-2 px-4">Book</a>

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
                                    <img src="https://i.imgur.com/zQZSWrt.jpg" width="50" className="rounded-circle mr-2" />
                                    <input style={{ marginLeft: "10px" }} type="text" className="form-control w-100" placeholder="Enter your comment..." />
                                </div>
                                <div className="mt-2 mb-3">
                                    {/* list cmt */}
                                    <div className="d-flex flex-row p-3">
                                        <img src="https://i.imgur.com/zQZSWrt.jpg" width="40" height="40" className="rounded-circle mr-3" />
                                        <div className="w-100">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex align-items-center">
                                                    <span style={{ marginLeft: "10px" }} className="mr-2">Brian Selter</span>

                                                </div>
                                            </div>
                                            <p style={{ marginLeft: "10px" }} className="text-justify comment-text mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                        </div>
                                    </div>

                                    <div className="d-flex flex-row p-3">
                                        <img src="https://i.imgur.com/3J8lTLm.jpg" width="40" height="40" className="rounded-circle mr-3" />
                                        <div className="w-100">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex align-items-center">
                                                    <span style={{ marginLeft: "10px" }} className="mr-2">Seltos Majito</span>

                                                </div>
                                            </div>
                                            <p style={{ marginLeft: "10px" }} className="text-justify comment-text mb-0">Tellus in hac habitasse platea dictumst vestibulum. Lectus nulla at volutpat diam ut venenatis tellus.</p>

                                        </div>
                                    </div>

                                    <div className="d-flex flex-row p-3">
                                        <img src="https://i.imgur.com/agRGhBc.jpg" width="40" height="40" className="rounded-circle mr-3" />
                                        <div className="w-100">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex align-items-center">
                                                    <span style={{ marginLeft: "10px" }} className="mr-2">Maria Santola</span>

                                                </div>
                                            </div>
                                            <p style={{ marginLeft: "10px" }} className="text-justify comment-text mb-0">Id eu nisl nunc mi ipsum faucibus. Massa massa ultricies mi quis hendrerit dolor.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OfficeDetail;
