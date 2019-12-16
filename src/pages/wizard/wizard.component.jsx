import React from 'react';
import { Route } from 'react-router-dom';

import WizardNavigation from '../../components/wizard-navigation/wizard-navigation.component';
import WizardContainer from '../../components/wizard-container/wizard-container.component';
import WizardActionBar from '../../components/wizard-action-bar/wizard-action-bar.component';

import './wizard.styles.scss';

const Wizard = () => (
    <div className="wizardPageWrapper">
        <Route path="/wizard/:wizardStep" render={() => <WizardActionBar reservationID="1245856ADc" />} />
        <div className="wizardWrap">
            <WizardNavigation/>
            <WizardContainer/>
        </div>
    </div>
);

export default Wizard;