import React from 'react';
import { Switch , Route } from 'react-router-dom';

import WizardStepOne from '../wizard-step-01/wizard-step-01.component';
import WizardStepTwo from '../wizard-step-02/wizard-step-02.component';
import WizardStepThree from '../wizard-step-03/wizard-step-03.component';
import WizardStepFour from '../wizard-step-04/wizard-step-04.component';

import './wizard-container.styles.scss';

const WizardContainer = () => (
    <div className="wizardContainer">
      <Switch>
        <Route exact path="/wizard" component={WizardStepOne} />
        <Route exact path="/wizard/reservation-details" component={WizardStepTwo} />
        <Route exact path="/wizard/vehicle-selection" component={WizardStepThree} />
        <Route exact path="/wizard/payment-details" component={WizardStepFour} />
      </Switch>
    </div>
);

export default WizardContainer;