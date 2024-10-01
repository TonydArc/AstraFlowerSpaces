/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import { useNavigate, useParams } from "react-router-dom";
import {
  bookingOffice,
  getadditionalServices,
  getOfficeById,
} from "../services/OfficeService";
import { getProfile } from "../services/UserService";
import SuccessToast from "../component/toast/SuccessToast";
import ErrorToast from "../component/toast/ErrorToast";
import { getAccessToken } from "../services/untils";
import Cookies from "universal-cookie";
import Spinner from "../component/spinner/Spinner";

interface Office {
  OfficeID: number;
  OfficeName: string;
  Description: string;
  Address: string;
  Price: number;
  ServiceName: string;
  Status: string;
  ImgURL: string;
  ThumbnailURL: string | null;
  TypeName: string;
}

interface AdditionalService {
  AdditionalServiceID: number;
  ServiceName: string;
  Description: string;
  Price: string;
}

interface SelectedAdditionalService {
  AdditionalServiceID: number;
  Quantity: number;
  Price: number;
}

const BookingForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [office, setOffice] = useState<Office | null>(null);
  const [customerid, setCustomerID] = useState<number | null>(null);
  const [fullname, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [additionalServices, setAdditionalServices] = useState<
    AdditionalService[]
  >([]);
  const [startDate, setStartDate] = useState<string>(
    new Date().toISOString().slice(0, 10)
  ); // Format YYYY-MM-DD
  const [endDate, setEndDate] = useState<string>(
    new Date().toISOString().slice(0, 10)
  ); // Format YYYY-MM-DD
  const [selectedServices, setSelectedServices] = useState<
    SelectedAdditionalService[]
  >([]);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [showError, setErrorToast] = useState<boolean>(false);
  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleShowToast = () => {
    setShowToast(true);
  };
  const handelErrorToast = () => {
    setErrorToast(true);
  };

  useEffect(() => {
    const fetchOfficeById = async () => {
      try {
        const officeId = Number(id); // Chuyển `id` thành number
        if (isNaN(officeId)) {
          console.error("Invalid office ID:", id);
          return;
        }

        const response = await getOfficeById(officeId); // Lấy thông tin văn phòng theo id
        if (response.success) {
          setOffice(response.data); // Cập nhật state với dữ liệu văn phòng nhận được
        } else {
          console.error("Error fetching data:", response.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchOfficeById();
  }, [id]); // Chạy lại effect nếu `id` thay đổi

  useEffect(() => {
    const fetchAdditionalServices = async () => {
      try {
        const response = await getadditionalServices();
        if (response.success) {
          setAdditionalServices(response.data); // Cập nhật state với dữ liệu dịch vụ bổ sung
        } else {
          console.error("Error fetching data:", response.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchAdditionalServices();
  }, [navigate]);

  useEffect(() => {
    const getCustomerID = async () => {
      try {
        const data = await getProfile();
        setCustomerID(data.CustomerID);
        setFullName(data.FullName);
        setEmail(data.Email);
      } catch (error) {
        console.log(error);
      }
    };

    const token = getAccessToken();
    if (token) {
      getCustomerID();
    } else {
      navigate("/");
    }
  }, [cookies, navigate]);

  const handleCheckboxChange = (serviceID: number, price: string) => {
    setSelectedServices((prev) => {
      const isSelected = prev.some(
        (service) => service.AdditionalServiceID === serviceID
      );

      if (isSelected) {
        // Nếu dịch vụ đã được chọn, bỏ chọn nó
        return prev.filter(
          (service) => service.AdditionalServiceID !== serviceID
        );
      } else {
        // Nếu dịch vụ chưa được chọn, thêm nó vào danh sách
        return [
          ...prev,
          {
            AdditionalServiceID: serviceID,
            Quantity: 1, // Giá trị mặc định
            Price: parseFloat(price.replace(",", "")), // Chuyển đổi giá từ chuỗi sang số
          },
        ];
      }
    });
  };

  const handleBook = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if required data is available
    if (customerid === null || office?.OfficeID === undefined) {
      console.error("CustomerID or OfficeID is missing");
      return;
    }

    const isValid = selectedServices.every((service) => {
      return (
        service.AdditionalServiceID > 0 &&
        service.Quantity > 0 &&
        service.Price >= 0
      );
    });

    if (!isValid) {
      console.error("Invalid additional services data");
      return;
    }

    const formdata = {
      CustomerID: customerid,
      OfficeID: office.OfficeID,
      StartDate: startDate,
      EndDate: endDate,
      Status: "Đang chờ xác nhận",
      Method: "Thanh toán sau khi hoàn tất thuê",
      AdditionalServices: selectedServices,
    };

    try {
      console.log(formdata);
      await bookingOffice(formdata);
      // Handle successful booking
      handleShowToast();
      setTimeout(() => {
        navigate("/officelist");
      }, 1000);
    } catch (error: any) {
      // Handle errors
      //   if (error.response) {
      //     // The request was made and the server responded with a status code
      //     // that falls out of the range of 2xx
      //     console.error("Error Response Data:", error.response.data);
      //     console.error("Error Response Status:", error.response.status);
      //     console.error("Error Response Headers:", error.response.headers);
      //   } else if (error.request) {
      //     // The request was made but no response was received
      //     console.error("Error Request:", error.request);
      //   } else {
      //     // Something happened in setting up the request that triggered an Error
      //     console.error("Error Message:", error.message);
      //   }
      handelErrorToast();
    }
  };

  const formatPrice = (price: string) => {
    const numericPrice = parseFloat(price);
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    }).format(numericPrice);
  };

  if (!office) {
    return (
      <>
        <Header title="Book Văn Phòng" path="Booking" /> <Spinner />
      </>
    ); // Hiển thị trạng thái đang tải khi dữ liệu đang được lấy
  }

  return (
    <>
      <Header title="Book Văn Phòng" path="Booking" />

      {/* Office Booking Start */}
      <div className="container-fluid packages booking py-5">
        <div className="container py-5">
          <div className="row">
            {/* Selected office to booking */}
            <div className="col-lg-6 mb-4 mb-lg-0 d-flex align-items-stretch">
              <div className="packages-item rounded overflow-hidden flex-grow-1 d-flex flex-column">
                <div className="packages-img position-relative flex-grow-1">
                  <img
                    src={`https://res.cloudinary.com/dbsou9jps/image/upload/${office.ImgURL}`}
                    className="img-fluid w-100 h-100 object-fit-cover"
                    alt="Office Image"
                  />
                  <div className="packages-info d-flex border border-start-0 border-end-0 position-absolute bottom-0 start-0 w-100 z-index-5">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-map-marker-alt me-2"></i>
                      {office.Address}
                    </small>
                    {/* <small className="flex-fill text-center border-end py-2"><i className="fa fa-tag me-2"></i>{office.ServiceName}</small> */}
                    <small className="flex-fill text-center py-2">
                      <i className="fa fa-building me-2"></i>
                      {office.TypeName}
                    </small>
                  </div>
                  <div className="packages-price py-2 px-4">
                    {formatPrice(office.Price.toLocaleString())}/Ngày
                  </div>
                </div>
                <div className="packages-content bg-light rounded-bottom flex-grow-1 d-flex flex-column">
                  <div className="p-4 pb-0">
                    <h5 className="mb-0">{office.OfficeName}</h5>
                    <div className="mb-3">
                      <small className="fa fa-star text-primary"></small>
                      <small className="fa fa-star text-primary"></small>
                      <small className="fa fa-star text-primary"></small>
                      <small className="fa fa-star text-primary"></small>
                      <small className="fa fa-star text-primary"></small>
                    </div>
                    <p className="mb-4">{office.Description}</p>
                  </div>
                  <div className="row bg-primary rounded-bottom mx-0 mt-auto">
                    <div className="col-6 text-start px-0">
                      {/* <a href="#" className="btn-hover btn text-white py-2 px-4">Read More</a> */}
                    </div>
                    <div className="col-6 text-end px-0">
                      {/* <a href="#" className="btn-hover btn text-white py-2 px-4">Book Now</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking form */}
            <div className=" col-lg-6 d-flex align-items-stretch">
              <div className="form-container w-100">
                <h1 className="text-white mb-3">Đặt văn phòng của bạn</h1>
                <p className="text-white mb-4">
                  Nhận ngay <span className="text-warning">ưu đãi</span> bất
                  ngờ. Nhanh lên!
                </p>
                <form onSubmit={handleBook}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          value={fullname}
                          className="form-control bg-white border-0"
                          id="name"
                          placeholder="Họ tên"
                          disabled
                        />
                        <label htmlFor="name">Họ tên</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          value={email}
                          className="form-control bg-white border-0"
                          id="email"
                          placeholder="Email"
                          disabled
                        />
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="date"
                          className="form-control bg-white border-0"
                          id="startDate"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                        />
                        <label htmlFor="startDate">Ngày bắt đầu thuê</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="date"
                          className="form-control bg-white border-0"
                          id="endDate"
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                        />
                        <label htmlFor="endDate">Ngày kết thúc thuê</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <ul className="list-group list-group-light">
                          {additionalServices.map((service) => (
                            <li
                              key={service.AdditionalServiceID}
                              className="list-group-item "
                            >
                              <input
                                className="form-check-input me-1"
                                type="checkbox"
                                value={service.AdditionalServiceID.toString()}
                                onChange={() =>
                                  handleCheckboxChange(
                                    service.AdditionalServiceID,
                                    service.Price
                                  )
                                }
                              />
                              {service.ServiceName} :{" "}
                              {formatPrice(service.Price)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {/* <div className="col-12">
                                            <div className="form-floating">
                                                <textarea
                                                    className="form-control bg-white border-0"
                                                    placeholder="Special Request"
                                                    id="message"
                                                    style={{ height: '100px' }}
                                                ></textarea>
                                                <label htmlFor="message">Special Request</label>
                                            </div>
                                        </div> */}
                    <div className="col-12">
                      <button
                        className="btn btn-primary text-white w-100 py-3"
                        type="submit"
                      >
                        Book Ngay
                      </button>
                    </div>
                    <SuccessToast
                      message="Booking thành công"
                      show={showToast}
                      onClose={() => setShowToast(false)}
                    />
                    <ErrorToast
                      message="Booking thất bại"
                      show={showError}
                      onClose={() => setShowToast(false)}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Office Booking End */}
    </>
  );
};

export default BookingForm;
