import React from 'react';
import Header from '../component/Header';

const UserProfile: React.FC = () => {
    return (
        <>  
            <Header path='Profile' title='User Profile'/>
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-4 col-lg-3 border-end">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img className="rounded-circle mt-5" width="150px" src="https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg" alt="Profile"/>
                            <span className="font-weight-bold mt-3">Edogaru</span>
                            <span className="text-black-50">edogaru@mail.com.my</span>
                        </div>
                    </div>
                    
                    {/* user info */}
                    <div className="col-md-8 col-lg-9">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-end">Profile Settings</h4>
                            </div>
                            <div className="row g-3 mt-2">
                                <div className="col-md-6">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control" placeholder="first name" defaultValue=""/>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Surname</label>
                                    <input type="text" className="form-control" defaultValue="" placeholder="surname"/>
                                </div>
                            </div>
                            <div className="row g-3 mt-3">
                                <div className="col-12">
                                    <label className="form-label">Mobile Number</label>
                                    <input type="text" className="form-control" placeholder="enter phone number" defaultValue=""/>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Address Line 1</label>
                                    <input type="text" className="form-control" placeholder="enter address line 1" defaultValue=""/>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Address Line 2</label>
                                    <input type="text" className="form-control" placeholder="enter address line 2" defaultValue=""/>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Postcode</label>
                                    <input type="text" className="form-control" placeholder="enter postcode" defaultValue=""/>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">State</label>
                                    <input type="text" className="form-control" placeholder="enter state" defaultValue=""/>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Area</label>
                                    <input type="text" className="form-control" placeholder="enter area" defaultValue=""/>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Email ID</label>
                                    <input type="text" className="form-control" placeholder="enter email id" defaultValue=""/>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Education</label>
                                    <input type="text" className="form-control" placeholder="education" defaultValue=""/>
                                </div>
                            </div>
                            <div className="row g-3 mt-3">
                                <div className="col-md-6">
                                    <label className="form-label">Country</label>
                                    <input type="text" className="form-control" placeholder="country" defaultValue=""/>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">State/Region</label>
                                    <input type="text" className="form-control" defaultValue="" placeholder="state"/>
                                </div>
                            </div>
                            <div className="mt-5 text-center">
                                <button className="btn btn-primary profile-button" type="button">Save Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserProfile;
