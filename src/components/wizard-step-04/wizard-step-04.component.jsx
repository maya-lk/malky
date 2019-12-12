import React from 'react';

import './wizard-step-04.styles.scss';

const WizardStepFour = () => {
    return(
        <div className="wizardContent wizardStep4 d-flex flex-wrap">
            <div className="vehicleDetails"></div>
            <div className="tripDetails"></div>
            <div className="discounts"></div>
            <div className="paymentTotalWrap"></div>
        </div>
    )
};

export default WizardStepFour;