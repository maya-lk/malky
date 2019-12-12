import React from 'react';
import { Icon , Input , DatePicker , Select , TimePicker  } from 'antd';

import ReservationSummery from '../reservation-summery/reservation-summery.component';

import './wizard-step-02.styles.scss';

const locationSVG = () => (
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
);
const LocationIcon = props => <Icon component={locationSVG} {...props} />;
const { Option } = Select;

class WizardStepTwo extends React.Component {

    render(){
        return(
            <div className="wizardContent wizardStep2 d-flex flex-wrap">
                <div className="bookingDetailsWrap">

                    <h3>Booking Details</h3>
                    <div className="tabWrap">
                        <ul className="nav nav-pills" id="pickupTab" role="tablist">
                            <li className="nav-item">
                                <span className="nav-link active" id="pickUp-tab" data-toggle="pill" href="#pickUp" role="tab" aria-controls="pickUp" aria-selected="true">Pick Up</span>
                            </li>
                        </ul>
                        <div className="tab-content" id="pickupTabContent">
                            <div className="tab-pane fade show active" id="pickUp" role="tabpanel" aria-labelledby="pickUp-tab">

                                <div className="form-group">
                                    <label>Pickup Location</label>
                                    <Input
                                        suffix={
                                            <LocationIcon />
                                        }
                                        className="location"
                                    />
                                </div>

                                <div className="d-flex row">
                                    <div className="form-group col-md-7 col-12">
                                        <label>Pickup Date</label>
                                        <DatePicker placeholder="" />
                                    </div>
                                    <div className="form-group col-md-5 col-12">
                                        <label>Pickup Time</label>
                                        <TimePicker 
                                            use12Hours 
                                            format="h:mm A"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="tabWrap">
                        <ul className="nav nav-pills" id="dropOffTab" role="tablist">
                            <li className="nav-item">
                                <span className="nav-link active" id="dropOff-tab" data-toggle="pill" href="#dropOff" role="tab" aria-controls="dropOff" aria-selected="true">Drop Off</span>
                            </li>
                        </ul>
                        <div className="tab-content" id="dropOffTabContent">
                            <div className="tab-pane fade show active" id="dropOff" role="tabpanel" aria-labelledby="dropOff-tab">

                                <div className="form-group">
                                    <label>Pickup Location</label>
                                    <Input
                                        suffix={
                                            <LocationIcon />
                                        }
                                        className="location"
                                    />
                                </div>

                                <div className="d-flex row">
                                    <div className="form-group col-md-7 col-12">
                                        <label>Pickup Date</label>
                                        <DatePicker placeholder="" />
                                    </div>
                                    <div className="form-group col-md-5 col-12">
                                        <label>Pickup Time</label>
                                        <TimePicker 
                                            use12Hours 
                                            format="h:mm A"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="personalDetailsWrap">

                    <h3>Personal Details</h3>

                </div>
                <div className="reservationSummery">
                    
                    <h3>Reservation Summery</h3>
                    <ReservationSummery/>
                    
                </div>
            </div>
        )
    }
};

export default WizardStepTwo;