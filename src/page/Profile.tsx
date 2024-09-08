import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import { getProfile, updateProfile } from "../services/UserService";
import SuccessToast from "../component/toast/SuccessToast";
import ErrorToast from "../component/toast/ErrorToast";
import { getAccessToken } from "../services/untils";
import { useNavigate } from "react-router-dom";
import { getcustomerbook } from "../services/OfficeService";

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
    const [bookinglist, setBookingList] = useState<Booking[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = getAccessToken();
        if (!token) {
            navigate('/');
        }
    }, [navigate]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await getProfile();
                setProfile(data);
            } catch {
                setShowError(true);
            }
        };
        fetchUserData();
    }, []);

    useEffect(() => {
        if (profile) {
            const fetchBookList = async () => {
                try {
                    const booklist = await getcustomerbook(profile.CustomerID);
                    setBookingList(booklist.data);
                } catch {
                    setShowError(true);
                }
            };
            fetchBookList();
        }
    }, [profile]);

    const handleUpdateClick = () => {
        setIsEditing(true);
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
        } catch {
            setShowError(true);
        }
    };

    const filteredBookings = bookinglist.filter((booking) =>
        booking.OfficeName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Header path="Profile" title="User Profile" />

            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card ">
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
                                <h4 className="mb-4">Profile Settings</h4>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <label className="form-label">Full Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Your Full Name"
                                            value={profile?.FullName || ''}
                                            onChange={(e) => setProfile({ ...profile!, FullName: e.target.value })}
                                            disabled={!isEditing}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label">Phone</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Your Phone"
                                            value={profile?.Phone || ''}
                                            onChange={(e) => setProfile({ ...profile!, Phone: e.target.value })}
                                            disabled={!isEditing}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label">Address</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Your Address"
                                            value={profile?.Address || ''}
                                            onChange={(e) => setProfile({ ...profile!, Address: e.target.value })}
                                            disabled={!isEditing}
                                        />
                                    </div>
                                    <div className="col-12 mt-4 text-center">
                                        {isEditing ? (
                                            <button className="btn btn-primary w-100" type="button" onClick={handleSave}>Save Changes</button>
                                        ) : (
                                            <button className="btn btn-primary w-100" type="button" onClick={handleUpdateClick}>Update Info</button>
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
                                <h4 className="mb-4">My Bookings</h4>
                                <input
                                    type="text"
                                    className="form-control mb-4"
                                    placeholder="Search Bookings"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />

                                <ul className="list-group">
                                    {filteredBookings.map((booking) => (
                                        <li key={booking.BookingID} className="list-group-item d-flex justify-content-between align-items-center">
                                            <div>
                                                <h5>{booking.OfficeName}</h5>
                                                <p>{booking.Description}</p>
                                                <p>
                                                    <strong>Start Date:</strong> {booking.StartDate} <br />
                                                    <strong>End Date:</strong> {booking.EndDate} <br />
                                                    <strong>Total Amount:</strong> {booking.TotalAmount}
                                                </p>
                                            </div>
                                            <div>
                                                <span className={`badge bg-${booking.Status === 'Xác nhận' ? 'success' : 'warning'}`}>{booking.Status}</span>
                                                <a href="#" className="text-muted ms-3">
                                                    <i className="bi bi-pencil"></i>
                                                </a>
                                                <a href="#" className="text-danger ms-3">
                                                    <i className="bi bi-trash"></i>
                                                </a>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

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
