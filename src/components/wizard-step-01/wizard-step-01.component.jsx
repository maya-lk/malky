import React from 'react';

import SelfDriveInactive from '../../assets/images/self-drive-inactive.png';
import WithDriveInactive from '../../assets/images/with-driver-inactive.png';
import Wedding from '../../assets/images/wedding.png';
import Airport from '../../assets/images/airport.png';
import Regulart from '../../assets/images/regular.png';

import './wizard-step-01.styles.scss';

const WizardStepOne = () => {
    return(
        <div className="wizardContent wizardStep1">

            <div className="form-group">
                <h3>Select Reservation Type</h3>
                <div className="btn-group">
                    <div className="custom-control custom-radio">
                        <input type="radio" id="selfDrive" name="driveType" className="custom-control-input" value="Self Drive" />
                        <label className="custom-control-label selfDrive" htmlFor="selfDrive" >
                            <span style={{ backgroundImage : `url(${SelfDriveInactive})`}} />
                            SELF DRIVE
                        </label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input type="radio" id="withDrive" name="driveType" className="custom-control-input" value="With Drive" />
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
                        <input type="radio" id="wedding" name="reservationType" className="custom-control-input" value="Wedding Hire" />
                        <label className="custom-control-label wedding" htmlFor="wedding" style={{ backgroundImage : `url(${Wedding})` }}>
                            Wedding Hire
                        </label>
                    </div>

                    <div className="type custom-control custom-radio">
                        <input type="radio" id="airport" name="reservationType" className="custom-control-input" value="Airport Drop/Pickup" />
                        <label className="custom-control-label airport" htmlFor="airport" style={{ backgroundImage : `url(${Airport})` }}>
                            Airport Drop/Pickup
                        </label>
                    </div>

                    <div className="type custom-control custom-radio">
                        <input type="radio" id="regular" name="reservationType" className="custom-control-input" value="Regular Bookings" />
                        <label className="custom-control-label regular" htmlFor="regular" style={{ backgroundImage : `url(${Regulart})` }}>
                            Regular Bookings
                        </label>
                    </div>

                </div>
            </div>

        </div>
    )
};

export default WizardStepOne;