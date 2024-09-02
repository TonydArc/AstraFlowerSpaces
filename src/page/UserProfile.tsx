/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import { useNavigate } from 'react-router-dom';
import { getAccessToken } from '../services/untils';
import { getProfile, updateProfile } from '../services/UserService';
import SuccessToast from '../component/toast/SuccessToast';
import ErrorToast from '../component/toast/ErrorToast';

interface Profile {
    UserID: number;
    CustomerID: number;
    FullName: string;
    Email: string;
    Phone: string;
    Address: string;
}

const UserProfile: React.FC = () => {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState<boolean>(false);
    const [showError, setErrorToast] = useState<boolean>(false);

    const handleShowToast = () => {
        setShowToast(true);
    };
    const handelErrorToast = () => {
        setErrorToast(true);
    };

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
            } catch (error) {
                setError('Failed to fetch user data.');
            } finally {
                setLoading(false);
            }
        };
        fetchUserData();
    }, []);

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
            handleShowToast();
            setIsEditing(false);
        } catch {
            handelErrorToast();
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <>
            <Header path='Profile' title='User Profile' />

            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-4 col-lg-3 border-end">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img className="rounded-circle mt-5" width="150px" src="https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg" alt="Profile" />
                            <span className="font-weight-bold mt-3">{profile?.FullName || 'User'}</span>
                        </div>
                    </div>

                    {/* user info */}
                    <div className="col-md-8 col-lg-9">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-end">Profile Settings</h4>
                            </div>
                            <div className="row g-3 mt-3">
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
                            </div>
                            <div className="mt-5 text-center">
                                {isEditing ? (
                                    <button className="btn btn-primary profile-button" type="button" onClick={handleSave}>Save Changes</button>
                                ) : (
                                    <button className="btn btn-primary profile-button" type="button" onClick={handleEdit}>Update Info</button>
                                )}
                            </div>
                            <SuccessToast
                                message="Cập nhật thông tin thành công"
                                show={showToast}
                                onClose={() => setShowToast(false)}
                            />
                            <ErrorToast
                                message="Cập nhật thông tin thất bại"
                                show={showError}
                                onClose={() => setShowToast(false)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfile;
