import React from 'react';

import WizardNavigation from '../../components/wizard-navigation/wizard-navigation.component';

import './home.styles.scss';

const HomePage = () => (
    <div className="homePageWrapper d-flex">
        <div className="wizardWrap">
            <WizardNavigation/>
        </div>
    </div>
);

export default HomePage;