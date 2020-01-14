import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

import './wizard-action-bar.styles.scss';

const WizardActionBar = ({ reservationID , isWizard }) => (
    <div className="wizardActionBar d-flex justify-content-between">
        <div className="reservationID">Reservation ID : {reservationID}</div>
        <div className="wizardActions">
            {
                (isWizard)?
                <Link className="btn" to="/availability-calender">View Availibility Calender</Link>
                : ''
            }
            <span className="btn"><Icon type="file-sync" /> Convert to an Estimation</span>
            <span className="btn"><Icon type="printer" /> Print Reservation</span>
        </div>
    </div>
);

export default WizardActionBar;