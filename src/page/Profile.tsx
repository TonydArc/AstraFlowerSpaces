import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import { getProfile, updateProfile } from "../services/UserService";
import SuccessToast from "../component/toast/SuccessToast";
import ErrorToast from "../component/toast/ErrorToast";
import { getAccessToken } from "../services/untils";
import { useNavigate } from "react-router-dom";
import { getcustomerbook } from "../services/OfficeService";
import CancelModal from "../component/modal/CancelBookModal";

interface Profile {
  UserID: number;
  CustomerID: number;
  FullName: string;
  Email: string;
  Phone: string;
  Address: string;
}

interface Booking {
  BookingID: number;
  CustomerID: number;
  OfficeID: number;
  StartDate: string; // Format: "YYYY-MM-DD"
  EndDate: string; // Format: "YYYY-MM-DD"
  TotalAmount: string;
  Status: string;
  CreatedAt: string; // Format: "YYYY-MM-DD HH:mm:ss"
  OfficeName: string;
  Description: string;
  Address: string;
  CreateBy: number;
  OfficeTypeID: number;
  Price: string;
  ServiceID: number;
  StatusID: number;
  ImgURL: string;
  ThumbnailURL: string;
}

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [showCancel, setShowCancel] = useState(false);
  const [bookinglist, setBookingList] = useState<Booking[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc"); // Thay đổi trạng thái sắp xếp
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(5); // Số mục trên mỗi trang
  const navigate = useNavigate();

  useEffect(() => {
    const token = getAccessToken();
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const fetchUserData = async () => {
    try {
      const data = await getProfile();
      setProfile(data);
    } catch {
      setShowError(true);
    }
  };

  const fetchBookList = async () => {
    try {
      const booklist = await getcustomerbook(profile.CustomerID);
      setBookingList(booklist.data);
    } catch {
      setShowError(true);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (profile) {
      fetchBookList();
    }
  }, [profile]);

  const handleUpdateClick = () => {
    setIsEditing(true);
  };

  const handleOpen = () => {
    setShowCancel(true);
  };

  const handleClose = () => {
    setShowCancel(false);
  };

  const handleReload = () => {
    fetchBookList();
  };

  const handleSave = async () => {
    if (!profile) return;

    const formData = {
      FullName: profile.FullName,
      Email: profile.Email,
      Phone: profile.Phone,
      Address: profile.Address,
    };

    try {
      await updateProfile(formData, profile.CustomerID);
      setShowToast(true);
      setIsEditing(false);
      fetchUserData();
    } catch {
      setShowError(true);
    }
  };

  const filteredBookings = bookinglist
    .filter((booking) =>
      booking.OfficeName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.CreatedAt);
      const dateB = new Date(b.CreatedAt);
      return sortOrder === "asc"
        ? dateA.getTime() - dateB.getTime()
        : dateB.getTime() - dateA.getTime();
    });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBookings.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    pageNumber: number
  ) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(filteredBookings.length / itemsPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <a
              className="page-link"
              href="#"
              aria-label="Previous"
              onClick={(e) => handleClick(e, currentPage - 1)}
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item ${number === currentPage ? "active" : ""}`}
            >
              <a
                className="page-link"
                href="#"
                onClick={(e) => handleClick(e, number)}
              >
                {number}
              </a>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === pageNumbers.length ? "disabled" : ""
            }`}
          >
            <a
              className="page-link"
              href="#"
              aria-label="Next"
              onClick={(e) => handleClick(e, currentPage + 1)}
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  };

  const formatPrice = (price: string) => {
    const numericPrice = parseFloat(price);
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    }).format(numericPrice);
  };

  const getBadgeClass = (status: string): string => {
    switch (status) {
      case "Hoàn tất":
      case "Xác nhận":
        return "bg-success";
      case "Đang chờ xác nhận":
        return "bg-warning text-dark";
      case "Hủy bỏ":
        return "bg-danger";
      default:
        return "bg-secondary";
    }
  };

  // Define a function to determine if the 'Cancel' button should be disabled
  const isCancelDisabled = (status: string): boolean => {
    return status === "Xác nhận" || status === "Hủy bỏ";
  };

  return (
    <>
      <Header path="Profile" title="Tài khoản của bạn" />

      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body text-center">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"
                  className="img-fluid rounded-circle mb-3"
                  alt="Avatar"
                  style={{ height: "300px" }}
                />
                <h4 className="text-primary">{profile?.FullName}</h4>
                <h5 className="text-muted">{profile?.Email}</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card py-2">
              <div className="card-body">
                <h4 className="mb-4">Thông Tin</h4>
                <div className="row g-3">
                  <div className="col-12">
                    <label className="form-label">Họ tên</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tên đầy đủ của bạn"
                      value={profile?.FullName || ""}
                      onChange={(e) =>
                        setProfile({ ...profile!, FullName: e.target.value })
                      }
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Số điện thoại</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Số điện thoại của bạn"
                      value={profile?.Phone || ""}
                      onChange={(e) =>
                        setProfile({ ...profile!, Phone: e.target.value })
                      }
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Địa chỉ</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Địa chỉ của bạn"
                      value={profile?.Address || ""}
                      onChange={(e) =>
                        setProfile({ ...profile!, Address: e.target.value })
                      }
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="col-12 mt-4 text-center">
                    {isEditing ? (
                      <button
                        className="btn btn-primary w-100"
                        type="button"
                        onClick={handleSave}
                      >
                        Lưu
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary w-100"
                        type="button"
                        onClick={handleUpdateClick}
                      >
                        Thay Đổi Thông Tin
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="mb-4">Lịch sử book</h4>
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="Tìm kiếm theo tên văn phòng"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="mb-3">
                  <button
                    className={`btn ${
                      sortOrder === "asc" ? "btn-primary" : "btn-secondary"
                    } me-2`}
                    onClick={() => setSortOrder("asc")}
                  >
                    Sắp xếp tăng dần
                  </button>
                  <button
                    className={`btn ${
                      sortOrder === "desc" ? "btn-primary" : "btn-secondary"
                    }`}
                    onClick={() => setSortOrder("desc")}
                  >
                    Sắp xếp giảm dần
                  </button>
                </div>
                {/* booking list */}
                <ul className="list-group">
                  {currentItems.length > 0 ? (
                    currentItems.map((booking) => (
                      <div key={booking.BookingID}>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <a
                            data-bs-toggle="collapse"
                            href={`#collapseExample-${booking.BookingID}`}
                            role="button"
                            aria-expanded="false"
                            aria-controls={`collapseExample-${booking.BookingID}`}
                            className="w-100"
                          >
                            <div className="row">
                              <div className="col-2">
                                <img
                                  src={`https://res.cloudinary.com/dbsou9jps/image/upload/${booking.ImgURL}`}
                                  style={{ height: "100px" }}
                                  className="img-fluid w-100 rounded-top"
                                  alt="Image"
                                />
                              </div>
                              <div className="col-7 d-flex flex-column justify-content-center">
                                <p className="fs-4 fw-bold mb-1">
                                  {booking.OfficeName}
                                </p>
                                <p className="text-muted mb-0">
                                  {booking.Address}
                                </p>
                              </div>

                              <div className="col-2 d-flex align-items-center justify-content-center">
                                <p
                                  className={`badge ${getBadgeClass(
                                    booking.Status
                                  )} p-2 rounded`}
                                  style={{
                                    fontSize: "1rem",
                                    marginTop: "15px",
                                  }}
                                >
                                  {booking.Status}
                                </p>
                              </div>
                              {booking.Status !== "Xác nhận" &&
                                booking.Status !== "Hủy bỏ" && (
                                  <div className="col-1 d-flex align-items-center justify-content-center">
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                      data-bs-toggle="modal"
                                      onClick={handleOpen}
                                      data-bs-target={`#CancelModal-${booking.BookingID}`}
                                      disabled={isCancelDisabled(
                                        booking.Status
                                      )}
                                    >
                                      Hủy
                                    </button>
                                    {showCancel && (
                                      <CancelModal
                                      BookingID={booking.BookingID}
                                      onReload={handleReload}
                                      onClose={handleClose}
                                    />
                                    )}
                                  </div>
                                )}
                            </div>
                          </a>
                        </li>
                        <div
                          className="collapse w-100"
                          id={`collapseExample-${booking.BookingID}`}
                          data-bs-parent="#collapseExampleParent"
                        >
                          <div
                            className="card card-body border border-top-0"
                            style={{
                              borderTopLeftRadius: "0px",
                              borderTopRightRadius: "0px",
                            }}
                          >
                            <div className="row">
                              <div className="col-8">
                                <p style={{ fontSize: "18px" }}>
                                  {booking.Description}
                                </p>
                              </div>
                              <div className="col-4">
                                <p>
                                  <strong>Ngày book:</strong>{" "}
                                  {booking.CreatedAt}
                                </p>
                                <p>
                                  <strong>Ngày bắt đầu thuê:</strong>{" "}
                                  {booking.StartDate}
                                </p>
                                <p>
                                  <strong>Ngày kết thúc thuê:</strong>{" "}
                                  {booking.EndDate}
                                </p>
                                <p>
                                  <strong>Thành tiền:</strong>{" "}
                                  {formatPrice(booking.TotalAmount)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <li className="list-group-item text-center">
                      Hiện không có lịch sử book
                    </li>
                  )}
                </ul>
              </div>
              <div className="mt-1 d-flex justify-content-center">
                {renderPagination()}
              </div>
            </div>
          </div>
        </div>

        <SuccessToast
          message="Cập nhật thông tin thành công"
          show={showToast}
          onClose={() => setShowToast(false)}
        />
        <ErrorToast
          message="Cập nhật thông tin thất bại"
          show={showError}
          onClose={() => setShowError(false)}
        />
      </div>
    </>
  );
};

export default Profile;
