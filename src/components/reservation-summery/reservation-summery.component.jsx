import React from 'react';
import { Collapse } from 'antd';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectReservationType , selectBookingType } from '../../redux/wizard/wizard.selectors';

import './reservation-summery.styles.scss';

const { Panel } = Collapse;

const ReservationSummery = ({ reservationType , bookingType }) => (
    <div className="summeryWrap">

        <div className="d-flex flex-wrap row">
            <div className="summeryItem col-md-6 col-12">
                <span className="label">Reservation Type</span>
                <span className="value">{reservationType}</span>
            </div>
            <div className="summeryItem col-md-6 col-12">
                <span className="label">Booking Type</span>
                <span className="value">{bookingType}</span>
            </div>
        </div>

        <div className="summeryItem">
            <span className="label">Client Name</span>
            <span className="value"></span>
        </div>

        <div className="summeryItem">
            <span className="label">Trip Details</span>
            <Collapse
                expandIconPosition="right"
            >
                <Panel header="Pick Up Details" key="1" >
                    
                    <div className="summeryItem">
                        <span className="label">Location</span>
                        <span className="value"></span>
                    </div>

                    <div className="summeryItem">
                        <span className="label">Date</span>
                        <span className="value"></span>
                    </div>

                    <div className="summeryItem">
                        <span className="label">Time</span>
                        <span className="value"></span>
                    </div>

                </Panel>
            </Collapse>
        </div>

        <div className="summeryItem">
            <span className="label">Trip Details</span>
            <Collapse
                expandIconPosition="right"
            >
                <Panel header="Drop Off Details" key="2" >
                    
                    <div className="summeryItem">
                        <span className="label">Location</span>
                        <span className="value"></span>
                    </div>

                    <div className="summeryItem">
                        <span className="label">Date</span>
                        <span className="value"></span>
                    </div>

                    <div className="summeryItem">
                        <span className="label">Time</span>
                        <span className="value"></span>
                    </div>

                </Panel>
            </Collapse>
        </div>

        <div className="summeryItem">
            <span className="label">Passenger Details</span>
            <span className="value"></span>
        </div>

        <div className="summeryItem">
            <span className="label">Laguage Details</span>
            <span className="value"></span>
        </div>

    </div>
);

const mapStateToProps = createStructuredSelector({
    reservationType : selectReservationType,
    bookingType : selectBookingType
});

export default connect(mapStateToProps)(ReservationSummery);