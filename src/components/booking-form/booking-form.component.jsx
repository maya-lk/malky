import React from 'react';
import { DatePicker , Select , AutoComplete , Input } from 'antd';

import Logo from '../../assets/images/logo.png';
import SelfDriveInactive from '../../assets/images/self-drive-inactive.png';
import WithDriveInactive from '../../assets/images/with-driver-inactive.png';
import Wedding from '../../assets/images/wedding.png';
import Airport from '../../assets/images/airport.png';
import Regulart from '../../assets/images/regular.png';

import './booking-form.styles.scss';
import 'antd/dist/antd.css';

const { Option } = Select;
const { TextArea } = Input;

const BookingForm = () => (
    <div className="bookingFormWrap">
        <div className="headerWrap">
            <img src={Logo} alt="Malkey"/>
            <h3>VEHICLE BOOKING FORM</h3>
        </div>
        <form>

            <div className="form-group">
                <div className="btn-group">
                    <div className="custom-control custom-radio">
                        <input type="radio" id="selfDrive" name="driveType" className="custom-control-input" value="Self Drive" />
                        <label className="custom-control-label selfDrive" htmlFor="selfDrive" >
                            <span style={{ backgroundImage : `url(${SelfDriveInactive})`}} />
                            SELF DRIVE
                        </label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input type="radio" id="withDrive" name="driveType" className="custom-control-input" value="With Drive" />
                        <label className="custom-control-label withDrive" htmlFor="withDrive" >
                            <span style={{ backgroundImage : `url(${WithDriveInactive})` }} />
                            WITH DRIVER
                        </label>
                    </div>
                </div>
            </div>

            <h4>Booking Details</h4>

            <div className="bookingDeatilsWrap">

                <div className="form-group">
                    <h6>Reservation Type</h6>
                    <div className="typeWrap d-flex justify-content-between">

                        <div className="type custom-control custom-radio">
                            <input type="radio" id="wedding" name="reservationType" className="custom-control-input" value="Wedding Hire" />
                            <label className="custom-control-label wedding" htmlFor="wedding" style={{ backgroundImage : `url(${Wedding})` }}>
                                Wedding Hire
                            </label>
                        </div>

                        <div className="type custom-control custom-radio">
                            <input type="radio" id="airport" name="reservationType" className="custom-control-input" value="Airport Drop/Pickup" />
                            <label className="custom-control-label airport" htmlFor="airport" style={{ backgroundImage : `url(${Airport})` }}>
                                Airport Drop/Pickup
                            </label>
                        </div>

                        <div className="type custom-control custom-radio">
                            <input type="radio" id="regular" name="reservationType" className="custom-control-input" value="Regular Bookings" />
                            <label className="custom-control-label regular" htmlFor="regular" style={{ backgroundImage : `url(${Regulart})` }}>
                                Regular Bookings
                            </label>
                        </div>

                    </div>
                </div>

                <div className="form-group">
                    <h6>Reservation Date</h6>
                    <div className="column2Wrap d-flex justify-content-between row">
                        <div className="col-md-6">
                            <DatePicker placeholder="From :" format="YYYY-MM-DD" /> 
                        </div>
                        <div className="col-md-6">
                            <DatePicker placeholder="To :" format="YYYY-MM-DD" /> 
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <h6>Travel Location</h6>
                    <div className="column2Wrap d-flex justify-content-between row">
                        <div className="col-md-6 input-group">
                            <input type="text" className="form-control" placeholder="From :" name="locationFrom" />
                            <div className="input-group-append">
                                <span className="input-group-text"><i className="fas fa-map-marker-alt"></i></span>
                            </div>
                        </div>
                        <div className="col-md-6 input-group">
                            <input type="text" className="form-control" placeholder="To :" name="locationTo" />
                            <div className="input-group-append">
                                <span className="input-group-text"><i className="fas fa-map-marker-alt"></i></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <div className="column2Wrap d-flex justify-content-between row">
                        <div className="col-md-6">
                            <h6>Number of Passengers</h6>
                            <Select placeholder="Select Passengers">
                                <Option value="2 person">2 person</Option>
                            </Select>
                        </div>
                        <div className="col-md-6">
                            <h6>Number of Laguage</h6>
                            <Select placeholder="Select Laguage">
                                <Option value="4 Bags">4 Bags</Option>
                            </Select>
                        </div>
                    </div>
                </div>

            </div>

            <h4>PERSONAL DETAILS</h4>

            <div className="personalDetails">

                <div className="form-group">
                    <div className="column2Wrap d-flex justify-content-between row">
                        <div className="col-md-6">
                            <h6>Name</h6>
                            <AutoComplete />
                        </div>
                        <div className="col-md-6">
                            <h6>Company Name</h6>
                            <AutoComplete />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <div className="column2Wrap d-flex justify-content-between row">
                        <div className="col-md-6">
                            <h6>Contact Number</h6>
                            <Input />
                        </div>
                        <div className="col-md-6">
                            <h6>E mail</h6>
                            <Input />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <h6>Address</h6>
                    <TextArea autoSize={true} />
                </div>

                <div className="form-group">
                    <input type="submit" value="REQUEST A RESERVATION" className="btn submitBtn" />
                </div>

            </div>

        </form>
    </div>
);

export default BookingForm;