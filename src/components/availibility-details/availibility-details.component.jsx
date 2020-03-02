import React from 'react';
import { CloseCircleFilled } from '@ant-design/icons';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import moment from 'moment';

import { selectClickedVehicle } from '../../redux/avalibility/avalibility.selectors';

import './availibility-details.styles.scss';

const AvailibilityDetails = ({ hidePopup , mainWrapRef , clickedVehicle , clickedDate }) => {

    const clickedDateTimestamp = Date.parse(clickedDate) / 1000;

    return (
        <div className="availibilityDetailsWrap" style={{ height : `${mainWrapRef.clientHeight}px` }}>
            <span className="closePop" onClick={ () => hidePopup() }><CloseCircleFilled /></span>
            <div className="vehicleDetails">
                <div className="vehicleName">{clickedVehicle.name}</div>
                <div className="bookingDate">
                    {
                        moment.unix(clickedDateTimestamp).format("Do MMMM")
                    }
                </div>
                <div className="bookingCount">1 Booking</div>
                <div className="image">
                    {
                        (clickedVehicle.pic) ?
                        <img src={clickedVehicle.pic} alt={clickedVehicle.name}/>
                        : ''
                    }
                </div>
            </div>
            <div className="bookingDetails">

                <div className="summeryItem">
                    <span className="label">Client Name</span>
                    <span className="value"></span>
                </div>

                <div className="d-flex flex-wrap row">

                    <div className="summeryItem col-md-6 col-12">
                        <span className="label">Reservation Type</span>
                        <span className="value"></span>
                    </div>

                    <div className="summeryItem col-md-6 col-12">
                        <span className="label">Booking Type</span>
                        <span className="value"></span>
                    </div>

                </div>

                <div className="d-flex flex-wrap row">

                    <div className="summeryItem col-md-6 col-12">
                        <span className="label">Pick Up</span>
                        <span className="value"></span>
                    </div>

                    <div className="summeryItem col-md-6 col-12">
                        <span className="label">Drop Off</span>
                        <span className="value"></span>
                    </div>

                </div>

                <div className="summeryItem">
                    <span className="label">Laguage Item</span>
                    <span className="value">
                        {`${clickedVehicle.luggage.heavy_luggage} Heavy`} <br/>
                        {`${clickedVehicle.luggage.losses} Losses`}
                    </span>
                </div>

            </div>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    clickedVehicle : selectClickedVehicle,
});

export default connect(mapStateToProps)(AvailibilityDetails);