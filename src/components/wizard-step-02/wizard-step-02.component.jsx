import React from 'react';
import { Icon , Input , DatePicker , Select , TimePicker , AutoComplete } from 'antd';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { 
    setPickupLocation , 
    setPickupDate , 
    setPickupTime , 
    setDropoffLocation , 
    setDropoffDate , 
    setDropoffTime , 
    setCustomerName , 
    setAdults , 
    setKids , 
    setToddlers , 
    setLaguage , 
    setActiveStep , 
    setDoneSteps
} from '../../redux/wizard/wizard.actions';
import {
    selectPickupLocation , 
    selectPickupDate , 
    selectPickupTime , 
    selectDropoffLocation , 
    selectDropoffDate , 
    selectDropoffTime , 
    selectCustomerName , 
    selectAdults , 
    selectKids , 
    selectToddlers , 
    selectLaguage 
} from '../../redux/wizard/wizard.selectors';

import ReservationSummery from '../reservation-summery/reservation-summery.component';

import './wizard-step-02.styles.scss';

const locationSVG = () => (
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
);
const LocationIcon = props => <Icon component={locationSVG} {...props} />;
const { Option } = Select;

class WizardStepTwo extends React.Component {

    handleNextPage = () => {
        const { history , setActiveStep , setDoneSteps } = this.props;
        history.push('/wizard/vehicle-selection');
        setActiveStep(3);
        setDoneSteps(3);
    }

    render(){
        const { 
            setPickupLocation , 
            setPickupDate , 
            setPickupTime , 
            setDropoffLocation , 
            setDropoffDate , 
            setDropoffTime , 
            setCustomerName , 
            setAdults , 
            setKids , 
            setToddlers , 
            setLaguage , 
            pickupLocation ,
            pickupDate ,
            pickupTime ,
            dropoffLocation ,
            dropoffDate ,
            dropoffTime ,
            customerName ,
            adults ,
            kids ,
            toddlers ,
            laguage 
        } = this.props;

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
                                        onChange={ (e) => setPickupLocation(e.target.value) }
                                        value={pickupLocation}
                                    />
                                </div>

                                <div className="d-flex row">
                                    <div className="form-group col-md-7 col-12">
                                        <label>Pickup Date</label>
                                        <DatePicker 
                                            placeholder="" 
                                            onChange={ (date, dateString) => setPickupDate(dateString) }
                                            defaultValue={pickupDate}
                                        />
                                    </div>
                                    <div className="form-group col-md-5 col-12">
                                        <label>Pickup Time</label>
                                        <TimePicker 
                                            use12Hours 
                                            format="h:mm A"
                                            onChange={ (time, timeString) => setPickupTime(timeString) }
                                            defaultValue={pickupTime}
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
                                    <label>Drop Off Location</label>
                                    <Input
                                        suffix={
                                            <LocationIcon />
                                        }
                                        className="location"
                                        onChange={ (e) => setDropoffLocation(e.target.value) }
                                        value={dropoffLocation}
                                    />
                                </div>

                                <div className="d-flex row">
                                    <div className="form-group col-md-7 col-12">
                                        <label>Drop Off Date</label>
                                        <DatePicker 
                                            placeholder="" 
                                            onChange={ (date, dateString) => setDropoffDate(dateString) }
                                            defaultValue={ dropoffDate }
                                        />
                                    </div>
                                    <div className="form-group col-md-5 col-12">
                                        <label>Drop Off Time</label>
                                        <TimePicker 
                                            use12Hours 
                                            format="h:mm A"
                                            onChange={ (time, timeString) => setDropoffTime(timeString) }
                                            defaultValue={ dropoffTime }
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="personalDetailsWrap">

                    <h3>Personal Details</h3>

                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Find Existing Client</span>
                            </div>
                            <AutoComplete
                                placeholder="Start typing here"
                                onChange={ (value) => setCustomerName(value) }
                                value={customerName}
                            />
                        </div>
                    </div>

                    <span className="btn addNewBtn">Or Add new Client</span>

                    <div className="passengerWrap">
                        <h3>Passenger Details</h3>

                        <div className="d-flex flex-wrap row">

                            <div className="form-group col-md-4 col-12">
                                <label>Number of Adults</label>
                                <Select
                                    defaultValue="2"
                                    onChange={ (value) => setAdults(value) }
                                    value={adults}
                                >
                                    <Option value="1">1 Person</Option>
                                    <Option value="2">2 Person</Option>
                                    <Option value="3">3 Person</Option>
                                    <Option value="4">4 Person</Option>
                                    <Option value="5">5 Person</Option>
                                    <Option value="6">6 Person</Option>
                                </Select>
                            </div>

                            <div className="form-group col-md-4 col-12">
                                <label>Number of Kids</label>
                                <Select
                                    defaultValue="2"
                                    onChange={ (value) => setKids(value) }
                                    value={kids}
                                >
                                    <Option value="">None</Option>
                                    <Option value="1">1 Kids</Option>
                                    <Option value="2">2 Kids</Option>
                                    <Option value="3">3 Kids</Option>
                                    <Option value="4">4 Kids</Option>
                                    <Option value="5">5 Kids</Option>
                                    <Option value="6">6 Kids</Option>
                                </Select>
                            </div>

                            <div className="form-group col-md-4 col-12">
                                <label>Number of Toddlers</label>
                                <Select
                                    defaultValue="2"
                                    onChange={ (value) => setToddlers(value) }
                                    value={toddlers}
                                >
                                    <Option value="">None</Option>
                                    <Option value="1">1 Toddlers</Option>
                                    <Option value="2">2 Toddlers</Option>
                                    <Option value="3">3 Toddlers</Option>
                                    <Option value="4">4 Toddlers</Option>
                                    <Option value="5">5 Toddlers</Option>
                                    <Option value="6">6 Toddlers</Option>
                                </Select>
                            </div>

                            <div className="form-group col-md-4 col-12">
                                <label>Number of Laguage</label>
                                <Select
                                    defaultValue="4"
                                    onChange={ (value) => setLaguage(value) }
                                    value={laguage}
                                >
                                    <Option value="">None</Option>
                                    <Option value="1">1 Bags</Option>
                                    <Option value="2">2 Bags</Option>
                                    <Option value="3">3 Bags</Option>
                                    <Option value="4">4 Bags</Option>
                                    <Option value="5">5 Bags</Option>
                                    <Option value="6">6 Bags</Option>
                                </Select>
                            </div>

                        </div>
                    </div>

                    <span 
                        className="btn submitBtn"
                        onClick={this.handleNextPage}
                    >Confirm and Proceed</span>

                </div>
                <div className="reservationSummery">
                    
                    <h3>Reservation Summery</h3>
                    <ReservationSummery/>
                    
                </div>
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    setPickupLocation : (pickupLocation) => dispatch(setPickupLocation(pickupLocation)),
    setPickupDate : (pickupDate) => dispatch(setPickupDate(pickupDate)),
    setPickupTime : (pickupTime) => dispatch(setPickupTime(pickupTime)),
    setDropoffLocation : (dropoffLocation) => dispatch(setDropoffLocation(dropoffLocation)),
    setDropoffDate : (dropoffDate) => dispatch(setDropoffDate(dropoffDate)),
    setDropoffTime : (dropoffTime) => dispatch(setDropoffTime(dropoffTime)),
    setCustomerName : (customerName) => dispatch(setCustomerName(customerName)),
    setAdults : (adults) => dispatch(setAdults(adults)),
    setKids : (kids) => dispatch(setKids(kids)),
    setToddlers : (toddlers) => dispatch(setToddlers(toddlers)),
    setLaguage : (laguage) => dispatch(setLaguage(laguage)),
    setActiveStep : (activeStep) => dispatch(setActiveStep(activeStep)),
    setDoneSteps : (doneSteps) => dispatch(setDoneSteps(doneSteps)),
});  

const mapStateToProps = createStructuredSelector({
    pickupLocation : selectPickupLocation,
    pickupDate : selectPickupDate,
    pickupTime : selectPickupTime,
    dropoffLocation : selectDropoffLocation,
    dropoffDate : selectDropoffDate,
    dropoffTime : selectDropoffTime,
    customerName : selectCustomerName,
    adults : selectAdults,
    kids : selectKids,
    toddlers : selectToddlers,
    laguage : selectLaguage,
});

export default withRouter(connect(mapStateToProps , mapDispatchToProps)(WizardStepTwo));