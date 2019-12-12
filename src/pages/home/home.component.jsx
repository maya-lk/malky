import React from 'react';

import WizardNavigation from '../../components/wizard-navigation/wizard-navigation.component';
import WizardContainer from '../../components/wizard-container/wizard-container.component';

import './home.styles.scss';

const HomePage = () => (
    <div className="homePageWrapper d-flex">
        <div className="wizardWrap">
            <WizardNavigation/>
            <WizardContainer/>
        </div>
    </div>
);

export default HomePage;