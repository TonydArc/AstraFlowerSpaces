import React from 'react';

const TopBuilding: React.FC = () => {
    return (
        <>
            <div className="container-fluid packages py-5">
                <div className="container py-5">
                    <div className="mx-auto text-center mb-5" style={{ maxWidth: "900px" }}>
                        <h3 className="section-title px-3">CÁC TÒA NHÀ CHO THUÊ NỔI BẬT</h3>
                        <p className="mb-0">AstraFlowerSpaces là trang website cung cấp dịch vụ văn phòng cho thuê uy tín tại Hà Nội & TP.HCM. Với quy mô rộng lớn, chúng tôi có thể đáp ứng được mọi nhu cầu về văn phòng cho thuê cho đối tác, khách hàng của mình.</p>
                    </div>
                    <div className="row">

                        {/* item list start */}
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="packages-item">
                                <div className="packages-img">
                                    <img src="../src/assets/building/netland-building_2.jpg" style={{height: '300px'}} className="img-fluid w-100 rounded-top" alt="Image" />
                                    <div className="packages-info d-flex border border-start-0 border-end-0 position-absolute" style={{height: '', width: '100%', bottom: '0', left: '0', zIndex: 5 }}>
                                    </div>

                                </div>
                                <div className="packages-content bg-light rounded-bottom pb-2">
                                    <div className="p-4 pb-0">
                                        <h5 className="mb-0">Tòa nhà Netland Building</h5>
                                        <small className="text-uppercase">Ngõ 27 Lê Văn Lương, Thanh Xuân, Hà Nội</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="packages-item">
                                <div className="packages-img">
                                    <img src="../src/assets/building/132536144394266886.jpg" style={{height: '300px'}} className="img-fluid w-100 rounded-top" alt="Image" />
                                    <div className="packages-info d-flex border border-start-0 border-end-0 position-absolute" style={{ width: '100%', bottom: '0', left: '0', zIndex: 5 }}>
                                    </div>

                                </div>
                                <div className="packages-content bg-light rounded-bottom pb-2">
                                    <div className="p-4 pb-0">
                                        <h5 className="mb-0">Tòa nhà 181 Lạc Long Quân</h5>
                                        <small className="text-uppercase">Tòa nhà 181 Lạc Long Quân</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="packages-item">
                                <div className="packages-img">
                                    <img src="../src/assets/building/My-Dinh-Pearl-Office-Tower-1.jpg" style={{height: '300px'}} className="img-fluid w-100 rounded-top" alt="Image" />
                                    <div className="packages-info d-flex border border-start-0 border-end-0 position-absolute" style={{ width: '100%', bottom: '0', left: '0', zIndex: 5 }}>
                                    </div>

                                </div>
                                <div className="packages-content bg-light rounded-bottom pb-2">
                                    <div className="p-4 pb-0">
                                        <h5 className="mb-0">Tòa nhà Mỹ Đình Pearl Office Tower</h5>
                                        <small className="text-uppercase">Đường Châu Văn Liêm</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="packages-item">
                                <div className="packages-img">
                                    <img src="../src/assets/building/20161025030457-saigon-center-gody.jpg" style={{height: '300px'}} className="img-fluid w-100 rounded-top" alt="Image" />
                                    <div className="packages-info d-flex border border-start-0 border-end-0 position-absolute" style={{ width: '100%', bottom: '0', left: '0', zIndex: 5 }}>
                                    </div>

                                </div>
                                <div className="packages-content bg-light rounded-bottom pb-2">
                                    <div className="p-4 pb-0">
                                        <h5 className="mb-0">Saigon Centre</h5>
                                        <small className="text-uppercase">Đường Lê Lợi, Quận 1</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="packages-item">
                                <div className="packages-img">
                                    <img src="../src/assets/building/1602644048-van-phong-tron-goi-tai-bitexco-financial-tower-quan-1.jpg" style={{height: '300px'}} className="img-fluid w-100 rounded-top" alt="Image" />
                                    <div className="packages-info d-flex border border-start-0 border-end-0 position-absolute" style={{ width: '100%', bottom: '0', left: '0', zIndex: 5 }}>
                                    </div>

                                </div>
                                <div className="packages-content bg-light rounded-bottom pb-2">
                                    <div className="p-4 pb-0">
                                        <h5 className="mb-0">Bitexco Financial Tower</h5>
                                        <small className="text-uppercase">Đường Hải Triều, Quận 1</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="packages-item">
                                <div className="packages-img">
                                    <img src="../src/assets/building/Vincom-Center-Shopping-Mall-Saigon.jpg" style={{height: '300px'}} className="img-fluid w-100 rounded-top" alt="Image" />
                                    <div className="packages-info d-flex border border-start-0 border-end-0 position-absolute" style={{ width: '100%', bottom: '0', left: '0', zIndex: 5 }}>
                                    </div>

                                </div>
                                <div className="packages-content bg-light rounded-bottom pb-2">
                                    <div className="p-4 pb-0">
                                        <h5 className="mb-0">Vincom Center</h5>
                                        <small className="text-uppercase">Đường Đồng Khởi, Quận 1</small>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </>
    );
}

export default TopBuilding;



