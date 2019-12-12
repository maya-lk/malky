import React from 'react';
import { Icon } from 'antd';

import './wizard-action-bar.styles.scss';

const WizardActionBar = () => (
    <div className="wizardActionBar d-flex justify-content-between">
        <div className="reservationID">Reservation ID : </div>
        <div className="wizardActions">
            <span className="btn"><Icon type="file-sync" /> Convert to an Estimation</span>
            <span className="btn"><Icon type="printer" /> Print Reservation</span>
        </div>
    </div>
);

export default WizardActionBar;