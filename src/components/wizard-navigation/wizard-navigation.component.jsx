import React from 'react';

import './wizard-navigation.styles.scss';

const WizardNavigation = () => (
    <nav className="nav wizardNavigation">
        <span className="nav-link active">
            <span className="number">01</span>
            RESERVATION TYPE
        </span>
        <span className="nav-link">
            <span className="number">02</span>
            RESERVATION DETAILS
        </span>
        <span className="nav-link">
            <span className="number">03</span>
            VEHICLE SELECTION
        </span>
        <span className="nav-link">
            <span className="number">04</span>
            PAYMENT DETAILS
        </span>
        <span className="nav-link">
            <span className="number">05</span>
            RESERVATION CONFIRMATION
        </span>
    </nav>
);

export default WizardNavigation;