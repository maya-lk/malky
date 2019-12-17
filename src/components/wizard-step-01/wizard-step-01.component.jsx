import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { setReservationType , setBookingType , setActiveStep , setDoneSteps } from '../../redux/wizard/wizard.actions';
import { selectReservationType , selectBookingType } from '../../redux/wizard/wizard.selectors';

import SelfDriveInactive from '../../assets/images/self-drive-inactive.png';
import WithDriveInactive from '../../assets/images/with-driver-inactive.png';
import Wedding from '../../assets/images/wedding.png';
import Airport from '../../assets/images/airport.png';
import Regulart from '../../assets/images/regular.png';

import './wizard-step-01.styles.scss';

const WizardStepOne = ({ setReservationType , setBookingType , reservationType , bookingType , setActiveStep , setDoneSteps , history }) => {

    const handleReservationType = (e) => {

        setReservationType(e.target.value);

        if( bookingType ){
            history.push('/wizard/reservation-details');
            setActiveStep(2);
            setDoneSteps(2);
        }

    }

    const handleBookingType = (e) => {

        setBookingType(e.target.value);

        if( reservationType ){
            history.push('/wizard/reservation-details');
            setActiveStep(2);
            setDoneSteps(2);
        }

    }

    return(
        <div className="wizardContent wizardStep1">

            <div className="form-group">
                <h3>Select Reservation Type</h3>
                <div className="btn-group">
                    <div className="custom-control custom-radio">
                        <input 
                            type="radio" 
                            id="selfDrive" 
                            name="driveType" 
                            className="custom-control-input" 
                            value="Self Drive"
                            onChange={(e) => handleReservationType(e)}
                            checked={`${(reservationType === 'Self Drive') ? 'checked' : ''}`}
                        />
                        <label className="custom-control-label selfDrive" htmlFor="selfDrive" >
                            <span style={{ backgroundImage : `url(${SelfDriveInactive})`}} />
                            SELF DRIVE
                        </label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input 
                            type="radio" 
                            id="withDrive" 
                            name="driveType" 
                            className="custom-control-input" 
                            value="With Driver" 
                            onChange={(e) => handleReservationType(e)}
                            checked={`${(reservationType === 'With Driver') ? 'checked' : ''}`}
                        />
                        <label className="custom-control-label withDrive" htmlFor="withDrive" >
                            <span style={{ backgroundImage : `url(${WithDriveInactive})` }} />
                            WITH DRIVER
                        </label>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <h5>Booking Type</h5>
                <div className="typeWrap d-flex justify-content-between">

                    <div className="type custom-control custom-radio">
                        <input 
                            type="radio" 
                            id="wedding" 
                            name="reservationType" 
                            className="custom-control-input" 
                            value="Wedding Hire"
                            onChange={(e) => handleBookingType(e)}
                            checked={`${(bookingType === 'Wedding Hire') ? 'checked' : ''}`}
                        />
                        <label className="custom-control-label wedding" htmlFor="wedding" style={{ backgroundImage : `url(${Wedding})` }}>
                            Wedding Hire
                        </label>
                    </div>

                    <div className="type custom-control custom-radio">
                        <input 
                            type="radio" 
                            id="airport" 
                            name="reservationType" 
                            className="custom-control-input" 
                            value="Airport Drop/Pickup" 
                            onChange={(e) => handleBookingType(e)}
                            checked={`${(bookingType === 'Airport Drop/Pickup') ? 'checked' : ''}`}
                        />
                        <label className="custom-control-label airport" htmlFor="airport" style={{ backgroundImage : `url(${Airport})` }}>
                            Airport Drop/Pickup
                        </label>
                    </div>

                    <div className="type custom-control custom-radio">
                        <input 
                            type="radio" 
                            id="regular" 
                            name="reservationType" 
                            className="custom-control-input" 
                            value="Regular Bookings" 
                            onChange={(e) => handleBookingType(e)}
                            checked={`${(bookingType === 'Regular Bookings') ? 'checked' : ''}`}
                        />
                        <label className="custom-control-label regular" htmlFor="regular" style={{ backgroundImage : `url(${Regulart})` }}>
                            Regular Bookings
                        </label>
                    </div>

                </div>
            </div>

        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    setReservationType : (reservationType) => dispatch(setReservationType(reservationType)),
    setBookingType : (bookingType) => dispatch(setBookingType(bookingType)),
    setActiveStep : (activeStep) => dispatch(setActiveStep(activeStep)),
    setDoneSteps : (doneSteps) => dispatch(setDoneSteps(doneSteps)),
});

const mapStateToProps = createStructuredSelector({
    reservationType : selectReservationType,
    bookingType : selectBookingType
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WizardStepOne));