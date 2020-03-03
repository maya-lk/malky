import React from 'react';
import { FileSyncOutlined , PrinterOutlined , StarFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setToggleAdvancedFeatures } from '../../redux/common/common.actions';

import './wizard-action-bar.styles.scss';

const WizardActionBar = ({ reservationID , isWizard , setToggleAdvancedFeatures }) => (
    <div className="wizardActionBar d-flex justify-content-between">
        <div className="reservationID">Reservation ID : {reservationID}</div>
        <div className="wizardActions">
            {
                (isWizard)?
                <Link className="btn" to="/availability-calender">View Availibility Calender</Link>
                : ''
            }
            <span className="btn"><FileSyncOutlined /> Convert to an Estimation</span>
            <span className="btn"><PrinterOutlined /> Print Reservation</span>
            <span className="btn" onClick={() => setToggleAdvancedFeatures()}><StarFilled /> Advanced Features</span>
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    setToggleAdvancedFeatures : () => dispatch(setToggleAdvancedFeatures()),
});

export default connect(null,mapDispatchToProps)(WizardActionBar);