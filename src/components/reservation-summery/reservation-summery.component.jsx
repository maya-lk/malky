import React from 'react';
import { Collapse } from 'antd';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

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

import './reservation-summery.styles.scss';

const { Panel } = Collapse;

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
    laguage  }) => (
    <div className="summeryWrap">

        <div className="d-flex flex-wrap row">
            {
                (reservationType)?
                <div className="summeryItem col-md-6 col-12">
                    <span className="label">Reservation Type</span>
                    <span className="value">{reservationType}</span>
                </div>
                : ''
            }
            
            {
                (bookingType)?
                <div className="summeryItem col-md-6 col-12">
                    <span className="label">Booking Type</span>
                    <span className="value">{bookingType}</span>
                </div>
                : ''
            }
            
        </div>
        
        {
            (customerName)?
            <div className="summeryItem">
                <span className="label">Client Name</span>
                <span className="value">{customerName}</span>
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
                                <span className="value">{pickupLocation}</span>
                            </div>
                            : ''
                        }
                        
                        {
                            (pickupDate)?
                            <div className="summeryItem">
                                <span className="label">Date</span>
                                <span className="value">{pickupDate}</span>
                            </div>
                            : ''
                        }
                        
                        {
                            (pickupTime)?
                            <div className="summeryItem">
                                <span className="label">Time</span>
                                <span className="value">{pickupTime}</span>
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
                                <span className="value">{dropoffLocation}</span>
                            </div>
                            : ''
                        }
                        
                        {
                            (dropoffDate)?
                            <div className="summeryItem">
                                <span className="label">Date</span>
                                <span className="value">{dropoffDate}</span>
                            </div>
                            : ''
                        }
                        
                        {
                            (dropoffTime)?
                            <div className="summeryItem">
                                <span className="label">Time</span>
                                <span className="value">{dropoffTime}</span>
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
                        <span style={{ marginRight : '10px' }}>{adults} Adults</span>
                        : ''
                    } 
                    {
                        (kids)?
                        <span style={{ margin : '0px 15px' }}>{kids} Kids</span>
                        : ''
                    }
                    {
                        (toddlers)?
                        <span style={{ marginLeft : '10px' }}>{toddlers} Toddlers</span>
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
                <span className="value">{laguage} Travaling Bags</span>
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

export default connect(mapStateToProps)(ReservationSummery);