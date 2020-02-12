import React from 'react';
import { Collapse , Select , AutoComplete  , DatePicker , TimePicker } from 'antd';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import moment from 'moment';

import { 
    selectReservationType , 
    selectBookingType ,
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
import { 
    setReservationType , 
    setBookingType ,
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
    setLaguage 
} from '../../redux/wizard/wizard.actions';

import './reservation-summery.styles.scss';

const { Panel } = Collapse;
const { Option } = Select;
const locations = ['Colombo' , 'Bandaranayake International Airport' , 'Katunayaka Head Office' , 'Kirulapana Head Office'];

const ReservationSummery = ({ 
        reservationType , 
        bookingType , 
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
        setReservationType , 
        setBookingType ,
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
        setLaguage 
    }) => (
    <div className="summeryWrap">

        <div className="d-flex flex-wrap row">
            {
                (reservationType)?
                <div className="summeryItem col-12">
                    <span className="label">Reservation Type</span>
                    <span className="value">
                        <Select
                            placeholder="Reservation Type"
                            value={reservationType}
                            onChange={ (value) => setReservationType(value)}
                        >
                            <Option value="Self Drive">Self Drive</Option>
                            <Option value="With Driver">With Driver</Option>
                        </Select>
                    </span>
                </div>
                : ''
            }
            
            {
                (bookingType)?
                <div className="summeryItem col-12">
                    <span className="label">Booking Type</span>
                    <span className="value">
                        <Select
                            placeholder="Booking Type"
                            value={bookingType}
                            onChange={ (value) => setBookingType(value)}
                        >
                            <Option value="Wedding Hire">Wedding Hire</Option>
                            <Option value="Airport Drop/Pickup">Airport Drop/Pickup</Option>
                            <Option value="Regular Bookings">Regular Bookings</Option>
                        </Select>
                    </span>
                </div>
                : ''
            }
            
        </div>
        
        {
            (customerName)?
            <div className="summeryItem">
                <span className="label">Client Name</span>
                <span className="value">
                    <AutoComplete
                        placeholder="Client Name"
                        onChange={ (value) => setCustomerName(value) }
                        value={customerName}
                    />
                </span>
            </div>
            : ''
        }        
        
        {
            (pickupLocation || pickupDate || pickupTime)?
            <div className="summeryItem">
                <span className="label">Trip Details</span>
                <Collapse
                    expandIconPosition="right"
                >
                    <Panel header="Pick Up Details" key="1" >

                        {
                            (pickupLocation)?
                            <div className="summeryItem">
                                <span className="label">Location</span>
                                <span className="value">
                                    <AutoComplete
                                        placeholder="Start typing here"
                                        onChange={ (value) => setPickupLocation(value) }
                                        value={pickupLocation}
                                        dataSource={locations}
                                        filterOption={(inputValue, option) =>
                                            option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                        }
                                        className="location"
                                    />
                                </span>
                            </div>
                            : ''
                        }
                        
                        {
                            (pickupDate)?
                            <div className="summeryItem">
                                <span className="label">Date</span>
                                <span className="value">
                                    <DatePicker 
                                        placeholder="" 
                                        onChange={ (date, dateString) => setPickupDate(dateString) }
                                        value={moment(pickupDate, 'YYYY-MM-DD')}
                                    />
                                </span>
                            </div>
                            : ''
                        }
                        
                        {
                            (pickupTime)?
                            <div className="summeryItem">
                                <span className="label">Time</span>
                                <span className="value">
                                    <TimePicker 
                                        use12Hours 
                                        format="h:mm A"
                                        onChange={ (time, timeString) => setPickupTime(timeString) }
                                        value={moment(pickupTime, 'HH:mm A')}
                                    />
                                </span>
                            </div>
                            : ''
                        }

                    </Panel>
                </Collapse>
            </div>
            : ''
        }
        
        {
            (dropoffLocation || dropoffDate || dropoffTime)?
            <div className="summeryItem">
                <span className="label">Trip Details</span>
                <Collapse
                    expandIconPosition="right"
                >
                    <Panel header="Drop Off Details" key="2" >
                        
                        {
                            (dropoffLocation)?
                            <div className="summeryItem">
                                <span className="label">Location</span>
                                <span className="value">
                                    <AutoComplete
                                        placeholder="Start typing here"
                                        onChange={ (value) => setDropoffLocation(value) }
                                        value={dropoffLocation}
                                        dataSource={locations}
                                        filterOption={(inputValue, option) =>
                                            option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                        }
                                        className="location"
                                    />
                                </span>
                            </div>
                            : ''
                        }
                        
                        {
                            (dropoffDate)?
                            <div className="summeryItem">
                                <span className="label">Date</span>
                                <span className="value">
                                    <DatePicker 
                                        placeholder="" 
                                        onChange={ (date, dateString) => setDropoffDate(dateString) }
                                        value={moment(dropoffDate, 'YYYY-MM-DD')}
                                    />
                                </span>
                            </div>
                            : ''
                        }
                        
                        {
                            (dropoffTime)?
                            <div className="summeryItem">
                                <span className="label">Time</span>
                                <span className="value">
                                    <TimePicker 
                                        use12Hours 
                                        format="h:mm A"
                                        onChange={ (time, timeString) => setDropoffTime(timeString) }
                                        value={moment(dropoffTime, 'HH:mm A')}
                                    />
                                </span>
                            </div>
                            : ''
                        }                    

                    </Panel>
                </Collapse>
            </div>
            : ''
        }
        
        {
            (adults || kids || toddlers)?
            <div className="summeryItem">
                <span className="label">Passenger Details</span>
                <span className="value">
                    {
                        (adults)?
                        <span style={{ display : 'inline-block' , width : '100%' }}>
                            <Select
                                defaultValue="2"
                                onChange={ (value) => setAdults(value) }
                                value={adults}
                            >
                                <Option value="">None</Option>
                                <Option value="1">1 Adults</Option>
                                <Option value="2">2 Adults</Option>
                                <Option value="3">3 Adults</Option>
                                <Option value="4">4 Adults</Option>
                                <Option value="5">5 Adults</Option>
                                <Option value="6">6 Adults</Option>
                            </Select>
                        </span>
                        : ''
                    } 
                    {
                        (kids)?
                        <span style={{ display : 'inline-block' , width : '100%' }}>
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
                        </span>
                        : ''
                    }
                    {
                        (toddlers)?
                        <span style={{ display : 'inline-block' , width : '100%' }}>
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
                        </span>
                        : ''
                    }
                </span>
            </div>
            : ''
        }
        
        {
            (laguage)?
            <div className="summeryItem">
                <span className="label">Laguage Details</span>
                <span className="value">
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
                </span>
            </div>
            : ''
        }
        

    </div>
);

const mapStateToProps = createStructuredSelector({
    reservationType : selectReservationType,
    bookingType : selectBookingType,
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

const mapDispatchToProps = dispatch => ({
    setReservationType : (reservationType) => dispatch(setReservationType(reservationType)),
    setBookingType : (bookingType) => dispatch(setBookingType(bookingType)),
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
});

export default connect(mapStateToProps , mapDispatchToProps)(ReservationSummery);