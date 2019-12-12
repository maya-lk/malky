import React from 'react';

import WizardNavigation from '../../components/wizard-navigation/wizard-navigation.component';
import WizardContainer from '../../components/wizard-container/wizard-container.component';

import './wizard.styles.scss';

const Wizard = () => (
    <div className="wizardPageWrapper d-flex">
        <div className="wizardWrap">
            <WizardNavigation/>
            <WizardContainer/>
        </div>
    </div>
);

export default Wizard;