import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="container-fluid bg-light service py-5">
      <div className="container py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
          <h3 className="section-title px-3">Dịch vụ của chúng tôi</h3>
          {/* <h1 className="mb-0">Dịch vụ của chúng tôi</h1> */}
        </div>
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="row g-4">
              <div className="col-12">
                <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                  <div className="service-content text-end">
                    <h5 className="mb-4">Không gian văn phòng linh hoạt</h5>
                    <p className="mb-0">
                      Không gian văn phòng linh hoạt tại AstraFlowerSpaces cung cấp các giải pháp văn phòng riêng, coworking, và phòng họp với diện tích và thời gian thuê linh hoạt. Chúng tôi giúp doanh nghiệp tiết kiệm chi phí và tối ưu hóa không gian làm việc với các gói thuê ngắn hạn hoặc dài hạn, đáp ứng nhu cầu từ startup đến doanh nghiệp lớn.
                    </p>
                  </div>
                  <div className="service-icon p-4">
                    <i className="fa fa-globe fa-4x text-primary"></i>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                  <div className="service-content text-end">
                    <h5 className="mb-4">Dịch vụ hỗ trợ doanh nghiệp</h5>
                    <p className="mb-0">
                    Dịch vụ hỗ trợ doanh nghiệp tại AstraFlowerSpaces bao gồm quản lý văn phòng, dịch vụ IT, và vệ sinh. Chúng tôi cung cấp hỗ trợ kỹ thuật 24/7, giúp duy trì kết nối internet ổn định và bảo mật. Đội ngũ quản lý văn phòng và lễ tân sẵn sàng hỗ trợ các nhu cầu hành chính và khách hàng, trong khi dịch vụ vệ sinh đảm bảo không gian làm việc luôn sạch sẽ và chuyên nghiệp.
                    </p>
                  </div>
                  <div className="service-icon p-4">
                    <i className="fa fa-hotel fa-4x text-primary"></i>
                  </div>
                </div>
              </div>
              {/* <div className="col-12">
                <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                  <div className="service-content text-end">
                    <h5 className="mb-4">Travel Guides</h5>
                    <p className="mb-0">
                      Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.
                    </p>
                  </div>
                  <div className="service-icon p-4">
                    <i className="fa fa-user fa-4x text-primary"></i>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-12">
                <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                  <div className="service-content text-end">
                    <h5 className="mb-4">Event Management</h5>
                    <p className="mb-0">
                      Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.
                    </p>
                  </div>
                  <div className="service-icon p-4">
                    <i className="fa fa-cog fa-4x text-primary"></i>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row g-4">
              <div className="col-12">
                <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                  <div className="service-icon p-4">
                    <i className="fa fa-globe fa-4x text-primary"></i>
                  </div>
                  <div className="service-content">
                    <h5 className="mb-4">Không gian làm việc sáng tạo và tiện ích đa dạng</h5>
                    <p className="mb-0">
                    Không gian làm việc sáng tạo và tiện ích đa dạng tại AstraFlowerSpaces bao gồm khu vực thư giãn, pantry tiện nghi và phòng họp nhỏ. Chúng tôi cung cấp môi trường làm việc thoải mái và sáng tạo với các tiện ích như cafe, nước uống, và không gian nghỉ ngơi, giúp nhân viên thư giãn và tăng cường hiệu quả công việc.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                  <div className="service-icon p-4">
                    <i className="fa fa-hotel fa-4x text-primary"></i>
                  </div>
                  <div className="service-content">
                    <h5 className="mb-4">Dịch vụ văn phòng ảo</h5>
                    <p className="mb-0">
                      Dịch vụ văn phòng ảo tại AstraFlowerSpaces cung cấp địa chỉ doanh nghiệp chuyên nghiệp, dịch vụ lễ tân, và tiếp nhận thư từ. Bạn có thể sử dụng địa chỉ văn phòng của chúng tôi để nâng cao hình ảnh doanh nghiệp mà không cần thuê không gian thực tế. Chúng tôi cũng hỗ trợ nhận cuộc gọi và tiếp khách, giúp bạn tập trung vào hoạt động kinh doanh chính.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="col-12">
                <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                  <div className="service-icon p-4">
                    <i className="fa fa-user fa-4x text-primary"></i>
                  </div>
                  <div className="service-content">
                    <h5 className="mb-4">Travel Guides</h5>
                    <p className="mb-0">
                      Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.
                    </p>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-12">
                <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                  <div className="service-icon p-4">
                    <i className="fa fa-cog fa-4x text-primary"></i>
                  </div>
                  <div className="service-content">
                    <h5 className="mb-4">Event Management</h5>
                    <p className="mb-0">
                      Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          {/* <div className="col-12">
            <div className="text-center">
              <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href="#">
                Service More
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
