import React from 'react';
import { Input , Select , AutoComplete } from 'antd';
import Icon from '@ant-design/icons';
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
    setDoneSteps , 
    toggleAddNewClient
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
import AddNewClient from '../add-new-client/add-new-client.component';
import DateRangePicker from '../date-range-picker/date-range-picker.component';
import TimeRangePickerCom from '../time-range-picker/time-range-picker.component';

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

    dateRangeChange = (date, dateString) => {

        const { setPickupDate , setDropoffDate } = this.props;

        setPickupDate(dateString[0]);
        setDropoffDate(dateString[1]);
    }

    timeRangeChange = (time, timeString) => {

        const { setPickupTime , setDropoffTime } = this.props;

        setPickupTime(timeString[0]);
        setDropoffTime(timeString[1]);
    }

    render(){
        const { 
            setPickupLocation , 
            setDropoffLocation ,
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
            laguage ,
            toggleAddNewClient
        } = this.props;

        const dataSource = [ 
            { value: 'Milindu Mallawarachchi' },
            { value: 'Viraj Sampath' },
            { value: 'Danushka Dimuthu' }
        ];
        const locations = [
            { value: 'Colombo' },
            { value: 'Bandaranayake International Airport' },
            { value: 'Katunayaka Head Office' },
            { value: 'Kirulapana Head Office' }
        ];

        return(
            <div className="wizardContent wizardStep2 d-flex flex-wrap">
                <div className="bookingDetailsWrap">

                    <h3>Booking Details</h3>

                    <div className="bookingWrapper">
                        
                        <DateRangePicker 
                            labelTitle="Pickup / Drop Off Date"
                            onChange={this.dateRangeChange}
                            startDate={pickupDate}
                            endDate={dropoffDate}
                        />
                        
                        <TimeRangePickerCom
                            labelTitle="Pickup / Drop Off Time"
                            onChange={this.timeRangeChange}
                            startTime={pickupTime}
                            endTime={dropoffTime}
                        />

                        <div className="form-group">
                            <label>Pickup Location</label>
                            <AutoComplete
                                placeholder="Start typing here"
                                onChange={ (value) => setPickupLocation(value) }
                                value={pickupLocation}
                                options={locations}
                                filterOption={(inputValue, option) =>
                                    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                }
                                className="location"
                            >
                                <Input suffix={<LocationIcon />} />
                            </AutoComplete>
                        </div>

                        <div className="form-group">
                            <label>Drop Off Location</label>
                            <AutoComplete
                                placeholder="Start typing here"
                                onChange={ (value) => setDropoffLocation(value) }
                                value={dropoffLocation}
                                options={locations}
                                filterOption={(inputValue, option) =>
                                    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                }
                                className="location"
                            >
                                <Input suffix={<LocationIcon />} />
                            </AutoComplete>
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
                                options={dataSource}
                                filterOption={(inputValue, option) =>
                                    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                }
                            />
                        </div>
                    </div>

                    <span 
                        className="btn addNewBtn"
                        onClick={() => toggleAddNewClient()}
                    >Or Add new Client</span>
                    <AddNewClient/>

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
    toggleAddNewClient : () => dispatch(toggleAddNewClient())
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