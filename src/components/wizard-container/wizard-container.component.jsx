import React from 'react';
import { Switch , Route } from 'react-router-dom';

import WizardStepOne from '../wizard-step-01/wizard-step-01.component';
import WizardStepTwo from '../wizard-step-02/wizard-step-02.component';

import './wizard-container.styles.scss';

const WizardContainer = () => (
    <div className="wizardContainer">
      <Switch>
        <Route exact path="/wizard" component={WizardStepOne} />
        <Route exact path="/wizard/reservation-details" component={WizardStepTwo} />
      </Switch>
    </div>
);

export default WizardContainer;