import React from 'react';

import ReservationSummery from '../reservation-summery/reservation-summery.component';

import './wizard-step-03.styles.scss';

const WizardStepThree = () => {
    return(
        <div className="wizardContent wizardStep3 d-flex flex-wrap">
            <div className="recomondations">
                <h3>System Recommendations</h3>
            </div>
            <div className="searchVehicle">
                <h3>Search for Vehicle</h3>
            </div>
            <div className="reservationSummery">       
                <h3>Reservation Summery</h3>
                <ReservationSummery/>
            </div>
        </div>
    )
};

export default WizardStepThree;